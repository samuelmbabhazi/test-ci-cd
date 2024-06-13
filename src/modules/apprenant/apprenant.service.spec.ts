import { Test, TestingModule } from '@nestjs/testing';
import { ApprenantService } from './apprenant.service';
import { PrismaService } from '../prisma/prisma.service';
import { Apprenant } from '@prisma/client';
import { prismaMock } from '../prisma/prisma.service.mock';

const apprenantArray = [
  {
    matricule: '1',
    prenom: 'Prenom1',
    nom: 'Nom1',
    postnom: 'Post Nom 1',
    dateNaissance: new Date(),
    adresse: 'Adresse1',
    email: 'Email1',
    telephone: 'Telephone1',
    tagOrdinateur: '1',
    codeCohorte: '1',
  },
  {
    matricule: '2',
    prenom: 'Prenom2',
    nom: 'Nom2',
    postnom: 'Post Nom 2',
    dateNaissance: new Date(),
    adresse: 'Adresse2',
    email: 'Email2',
    telephone: 'Telephone2',
    tagOrdinateur: '2',
    codeCohorte: '2',
  },
];

const oneApprenant = apprenantArray[0];

describe('ApprenantService', () => {
  let service: ApprenantService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ApprenantService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    service = module.get<ApprenantService>(ApprenantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create an apprenant', async () => {
    jest
      .spyOn(prismaMock.apprenant, 'create')
      .mockResolvedValue(oneApprenant as Apprenant);
    expect(await service.create(oneApprenant)).toEqual(oneApprenant);
  });

  it('should get all apprenants', async () => {
    jest
      .spyOn(prismaMock.apprenant, 'findMany')
      .mockResolvedValue(apprenantArray as Apprenant[]);
    expect(await service.findAll()).toEqual(apprenantArray);
  });

  it('should get one apprenant', async () => {
    jest
      .spyOn(prismaMock.apprenant, 'findUnique')
      .mockResolvedValue(oneApprenant as Apprenant);
    expect(await service.findOne('1')).toEqual(oneApprenant);
  });

  it('should update an apprenant', async () => {
    jest
      .spyOn(prismaMock.apprenant, 'update')
      .mockResolvedValue(oneApprenant as Apprenant);
    expect(await service.update('1', oneApprenant)).toEqual(oneApprenant);
  });

  it('should delete an apprenant', async () => {
    jest
      .spyOn(prismaMock.apprenant, 'delete')
      .mockResolvedValue(oneApprenant as Apprenant);
    expect(await service.remove('1')).toEqual(oneApprenant);
  });
});
