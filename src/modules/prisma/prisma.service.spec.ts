import { ConfigService } from '@nestjs/config';
import { PrismaService } from './prisma.service';

describe('PrismaService', () => {
  let prismaService: PrismaService;
  let configService: ConfigService;

  beforeEach(() => {
    configService = new ConfigService();
    prismaService = new PrismaService(configService);
  });

  afterEach(async () => {
    await prismaService.$disconnect();
  });

  it('should be defined', () => {
    expect(prismaService).toBeDefined();
  });

  it('should initialize and connect to the database on module init', async () => {
    const connectSpy = jest.spyOn(prismaService, '$connect');

    await prismaService.onModuleInit();

    expect(connectSpy).toHaveBeenCalled();
  });

  it('should disconnect from the database on module destroy', async () => {
    const disconnectSpy = jest.spyOn(prismaService, '$disconnect');

    await prismaService.onModuleDestroy();

    expect(disconnectSpy).toHaveBeenCalled();
  });
});
