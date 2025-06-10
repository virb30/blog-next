import { Polaroid } from "@/_modules/gift/_domain/entity/polaroid";
import { PolaroidsGateway } from "@/_modules/gift/_domain/gateway/polaroids.gateway.interface";
import { Storage } from "@google-cloud/storage";

interface PolaroidDTO {
  imageUrl?: string;
  caption?: string;
}

export class PolaroidsGCPStorageGateway implements PolaroidsGateway {

  storage: Storage;
  bucketName: string;

  constructor() {
    this.storage = new Storage({
      projectId: process.env.NEXT_GOOGLE_CLOUD_PROJECT_ID,
      credentials: {
        client_email: process.env.NEXT_GOOGLE_CLOUD_CLIENT_EMAIL,
        private_key: process.env.NEXT_GOOGLE_CLOUD_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
    });

    this.bucketName = process.env.NEXT_GOOGLE_CLOUD_BUCKET_NAME || 'assets-blog';
  }

  async listPolaroids(): Promise<Polaroid[]> {
    try {
      const [jsonContent] = await this.storage
        .bucket(this.bucketName)
        .file('gift-page/polaroids.json')
        .download();

      const polaroidsData = JSON.parse(jsonContent.toString()) as PolaroidDTO[];

      return polaroidsData.map(polaroid => {
        return new Polaroid({
          caption: polaroid.caption,
          imageUrl: polaroid.imageUrl ? this.getPublicUrl(polaroid.imageUrl) : undefined
        });
      });
    } catch (error) {
      console.error('Erro ao buscar polaroids no servidor:', error);
      throw error;
    }
  }

  private getPublicUrl = (filename: string) => {
    return `https://storage.googleapis.com/${this.bucketName}/gift-page/${filename}`;
  };

}