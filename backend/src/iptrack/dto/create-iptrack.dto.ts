export class CreateIptrackDto {
  readonly ip: string;
  readonly searchCount?: number;
  readonly lastSearchAt?: Date;
}
