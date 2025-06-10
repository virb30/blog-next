import { Storage } from '@google-cloud/storage';

const storage = new Storage({
  projectId: process.env.NEXT_GOOGLE_CLOUD_PROJECT_ID,
  credentials: {
    client_email: process.env.NEXT_GOOGLE_CLOUD_CLIENT_EMAIL,
    private_key: process.env.NEXT_GOOGLE_CLOUD_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
});

const bucketName = process.env.NEXT_GOOGLE_CLOUD_BUCKET_NAME || 'assets-blog';

export interface Polaroid {
  imageUrl: string;
  caption: string;
}

const getPublicUrl = (filename: string) => {
  return `https://storage.googleapis.com/${bucketName}/gift-page/${filename}`;
};

export const getPolaroids = async (): Promise<Polaroid[]> => {
  try {
    const [jsonContent] = await storage
      .bucket(bucketName)
      .file('gift-page/polaroids.json')
      .download();

    const polaroidsData = JSON.parse(jsonContent.toString()) as Polaroid[];

    return polaroidsData.map(polaroid => ({
      ...polaroid,
      imageUrl: getPublicUrl(polaroid.imageUrl),
    }));
  } catch (error) {
    console.error('Erro ao buscar polaroids no servidor:', error);
    throw error;
  }
}; 