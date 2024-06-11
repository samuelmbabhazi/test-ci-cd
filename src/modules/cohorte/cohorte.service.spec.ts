import { Test, TestingModule } from '@nestjs/testing';
import { CohorteService } from './cohorte.service';
import { PrismaService } from '../prisma/prisma.service';
import { Cohorte } from '@prisma/client';
import { prismaMock } from '../prisma/prisma.service.mock';

const cohorteArray = [
  { code: '1', description: 'Description1' },
  { code: '2', description: 'Description2' },
];

const oneCohorte = cohorteArray[0];

describe('CohorteService', () => {
  let service: CohorteService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CohorteService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    service = module.get<CohorteService>(CohorteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a cohorte', async () => {
    jest
      .spyOn(prismaMock.cohorte, 'create')
      .mockResolvedValue(oneCohorte as Cohorte);
    expect(await service.create(oneCohorte)).toEqual(oneCohorte);
  });

  it('should get all cohortes', async () => {
    jest
      .spyOn(prismaMock.cohorte, 'findMany')
      .mockResolvedValue(cohorteArray as Cohorte[]);
    expect(await service.findAll()).toEqual(cohorteArray);
  });

  it('should get one cohorte', async () => {
    jest
      .spyOn(prismaMock.cohorte, 'findUnique')
      .mockResolvedValue(oneCohorte as Cohorte);
    expect(await service.findOne('1')).toEqual(oneCohorte);
  });

  it('should update a cohorte', async () => {
    jest
      .spyOn(prismaMock.cohorte, 'update')
      .mockResolvedValue(oneCohorte as Cohorte);
    expect(await service.update('1', oneCohorte)).toEqual(oneCohorte);
  });

  it('should delete a cohorte', async () => {
    jest
      .spyOn(prismaMock.cohorte, 'delete')
      .mockResolvedValue(oneCohorte as Cohorte);
    expect(await service.remove('1')).toEqual(oneCohorte);
  });
});
