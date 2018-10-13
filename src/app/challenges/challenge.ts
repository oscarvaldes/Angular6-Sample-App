export interface IChallenge {
  items: (ItemsEntity)[] | null;
}
export interface ItemsEntity {
  metadata: (MetadataEntity)[] | null;
}
export interface MetadataEntity {
  key: string;
  value?: string | null;
}

