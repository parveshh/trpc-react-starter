import { RemovalPolicy, SecretValue, Stack } from "aws-cdk-lib";
import {
  InstanceClass,
  SubnetType,
  Vpc,
  InstanceType,
  InstanceSize,
  Port,
} from "aws-cdk-lib/aws-ec2";
import {
  Credentials,
  DatabaseInstance,
  DatabaseInstanceEngine,
  PostgresEngineVersion,
  StorageType,
} from "aws-cdk-lib/aws-rds";
import { Secret } from "aws-cdk-lib/aws-secretsmanager";
import Config from "../../config";

export function createRDS(stack: Stack, vpc: Vpc) {
  const credentials = new Secret(stack, "Credentials", {
    description: "Credentials for the database",
    secretName: "credentials",
    secretObjectValue: {
      username: SecretValue.unsafePlainText(Config.DB_USER),
      password: SecretValue.unsafePlainText(Config.DB_PASSWORD),
      database: SecretValue.unsafePlainText(Config.DB_NAME),
    },
  });
  const database = new DatabaseInstance(stack, "Database", {
    publiclyAccessible: true,
    vpc: vpc,
    vpcSubnets: {
      subnetType: SubnetType.PUBLIC,
    },
    databaseName: Config.DB_NAME,
    removalPolicy: RemovalPolicy.DESTROY,
    storageType: StorageType.GP2,
    allocatedStorage: 20,
    instanceType: InstanceType.of(InstanceClass.T3, InstanceSize.MICRO),
    credentials: Credentials.fromSecret(credentials),
    engine: DatabaseInstanceEngine.postgres({
      version: PostgresEngineVersion.VER_15,
    }),
  });

  // not for production
  //database.connections.allowFromAnyIpv4(Port.tcp(5432));
  // output
  return database;
}
