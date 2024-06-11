import { Test, TestingModule } from '@nestjs/testing';
import { OrdinateurService } from './ordinateur.service';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClient, Ordinateur } from '@prisma/client';

const ordinateurArray = [
  { tag: '1', modele: 'Model1', fabriquant: 'Fab1' },
  { tag: '2', modele: 'Model2', fabriquant: 'Fab2' },
];

const oneOrdinateur = ordinateurArray[0];

describe('OrdinateurService', () => {
  let service: OrdinateurService;
  let prisma: PrismaClient;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdinateurService, PrismaService],
    }).compile();

    service = module.get<OrdinateurService>(OrdinateurService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create an ordinateur', async () => {
    jest
      .spyOn(prisma.ordinateur, 'create')
      .mockResolvedValue(oneOrdinateur as Ordinateur);
    expect(await service.create(oneOrdinateur)).toEqual(oneOrdinateur);
  });

  it('should get all ordinateurs', async () => {
    jest
      .spyOn(prisma.ordinateur, 'findMany')
      .mockResolvedValue(ordinateurArray as Ordinateur[]);
    expect(await service.findAll()).toEqual(ordinateurArray);
  });

  it('should get one ordinateur', async () => {
    jest
      .spyOn(prisma.ordinateur, 'findUnique')
      .mockResolvedValue(oneOrdinateur as Ordinateur);
    expect(await service.findOne('1')).toEqual(oneOrdinateur);
  });

  it('should update an ordinateur', async () => {
    jest
      .spyOn(prisma.ordinateur, 'update')
      .mockResolvedValue(oneOrdinateur as Ordinateur);
    expect(await service.update('1', oneOrdinateur)).toEqual(oneOrdinateur);
  });

  it('should delete an ordinateur', async () => {
    jest
      .spyOn(prisma.ordinateur, 'delete')
      .mockResolvedValue(oneOrdinateur as Ordinateur);
    expect(await service.remove('1')).toEqual(oneOrdinateur);
  });
});
