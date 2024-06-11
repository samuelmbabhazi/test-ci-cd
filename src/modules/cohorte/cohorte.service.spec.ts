import { Test, TestingModule } from '@nestjs/testing';
import { CohorteService } from './cohorte.service';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClient, Cohorte } from '@prisma/client';

const cohorteArray = [
  { code: '1', description: 'Description1' },
  { code: '2', description: 'Description2' },
];

const oneCohorte = cohorteArray[0];

describe('CohorteService', () => {
  let service: CohorteService;
  let prisma: PrismaClient;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CohorteService, PrismaService],
    }).compile();

    service = module.get<CohorteService>(CohorteService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a cohorte', async () => {
    jest
      .spyOn(prisma.cohorte, 'create')
      .mockResolvedValue(oneCohorte as Cohorte);
    expect(await service.create(oneCohorte)).toEqual(oneCohorte);
  });

  it('should get all cohortes', async () => {
    jest
      .spyOn(prisma.cohorte, 'findMany')
      .mockResolvedValue(cohorteArray as Cohorte[]);
    expect(await service.findAll()).toEqual(cohorteArray);
  });

  it('should get one cohorte', async () => {
    jest
      .spyOn(prisma.cohorte, 'findUnique')
      .mockResolvedValue(oneCohorte as Cohorte);
    expect(await service.findOne('1')).toEqual(oneCohorte);
  });

  it('should update a cohorte', async () => {
    jest
      .spyOn(prisma.cohorte, 'update')
      .mockResolvedValue(oneCohorte as Cohorte);
    expect(await service.update('1', oneCohorte)).toEqual(oneCohorte);
  });

  it('should delete a cohorte', async () => {
    jest
      .spyOn(prisma.cohorte, 'delete')
      .mockResolvedValue(oneCohorte as Cohorte);
    expect(await service.remove('1')).toEqual(oneCohorte);
  });
});
