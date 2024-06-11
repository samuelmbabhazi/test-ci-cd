import { Test, TestingModule } from '@nestjs/testing';
import { ApprenantController } from './apprenant.controller';
import { ApprenantService } from './apprenant.service';

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

describe('ApprenantController', () => {
  let controller: ApprenantController;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let service: ApprenantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApprenantController],
      providers: [
        {
          provide: ApprenantService,
          useValue: {
            create: jest.fn().mockResolvedValue(oneApprenant),
            findAll: jest.fn().mockResolvedValue(apprenantArray),
            findOne: jest.fn().mockResolvedValue(oneApprenant),
            update: jest.fn().mockResolvedValue(oneApprenant),
            remove: jest.fn().mockResolvedValue(oneApprenant),
          },
        },
      ],
    }).compile();

    controller = module.get<ApprenantController>(ApprenantController);
    service = module.get<ApprenantService>(ApprenantService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create an apprenant', async () => {
    expect(await controller.create(oneApprenant)).toEqual(oneApprenant);
  });

  it('should get all apprenants', async () => {
    expect(await controller.findAll()).toEqual(apprenantArray);
  });

  it('should get one apprenant', async () => {
    expect(await controller.findOne('1')).toEqual(oneApprenant);
  });

  it('should update an apprenant', async () => {
    expect(await controller.update('1', oneApprenant)).toEqual(oneApprenant);
  });

  it('should delete an apprenant', async () => {
    expect(await controller.remove('1')).toEqual(oneApprenant);
  });
});
