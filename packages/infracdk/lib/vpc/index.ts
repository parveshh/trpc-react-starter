import { Stack } from "aws-cdk-lib";
import { SubnetType, Vpc } from "aws-cdk-lib/aws-ec2";

export const createVpc = (stack: Stack) => {
  const vpc = new Vpc(stack, "Vpc", {
    maxAzs: 2,
    natGateways: 0,
    subnetConfiguration: [
      {
        name: "Public",
        subnetType: SubnetType.PUBLIC,
      },
    ],
  });
  return vpc;
};
