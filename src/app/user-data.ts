export class S3AccessData {
    accessKeyId: string;
    secretAccessKey: string;
    region: string;
}

export class S3Info {
    bucket: string;
    accessData: S3AccessData;
}

export class UserData {
    token: string;
    username: string;
    accessLevel: number;
}