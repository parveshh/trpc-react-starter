// publish docker image via cdk

import { Duration, Stack } from "aws-cdk-lib";
import {
  Certificate,
  ValidationMethod,
} from "aws-cdk-lib/aws-certificatemanager";
import { Vpc } from "aws-cdk-lib/aws-ec2";
import { DockerImageAsset } from "aws-cdk-lib/aws-ecr-assets";
import { ContainerDefinition, ContainerImage } from "aws-cdk-lib/aws-ecs";
import { ApplicationLoadBalancedFargateService } from "aws-cdk-lib/aws-ecs-patterns";
import {
  ApplicationLoadBalancer,
  ApplicationProtocol,
  Protocol,
} from "aws-cdk-lib/aws-elasticloadbalancingv2";
import { HostedZone, IHostedZone } from "aws-cdk-lib/aws-route53";

export function createFargateApplication(
  stack: Stack,
  name: string,
  path: string,
  vpc: Vpc,
  certificate: Certificate,
  hostedZone: IHostedZone
) {
  console.log(path);
  const dimageAsset = new DockerImageAsset(stack, `d-${name}`, {
    directory: path,
    file: "server.Dockerfile",
  });

  const fargateApplication = new ApplicationLoadBalancedFargateService(
    stack,
    name,
    {
      vpc: vpc,
      certificate: certificate,

      assignPublicIp: true,
      domainZone: hostedZone,
      domainName: "api.tenancy.solutions",
      healthCheckGracePeriod: Duration.minutes(1),
      desiredCount: 1,
      cpu: 256,
      publicLoadBalancer: true,
      memoryLimitMiB: 512,
      taskImageOptions: {
        image: ContainerImage.fromDockerImageAsset(dimageAsset),
        containerName: "tenancy",
        containerPort: 3000,
        enableLogging: true,
      },
    }
  );

  fargateApplication.targetGroup.configureHealthCheck({
    port: "3000",
    path: "/trpc/healthy",
    protocol: Protocol.HTTP,
    healthyHttpCodes: "200-499",
    interval: Duration.seconds(30),
    unhealthyThresholdCount: 2,
    timeout: Duration.seconds(10),
  });

  return fargateApplication;
}
