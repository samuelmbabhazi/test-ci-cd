import { Test, TestingModule } from '@nestjs/testing';
import { OrdinateurController } from './ordinateur.controller';
import { OrdinateurService } from './ordinateur.service';

const ordinateurArray = [
  { tag: '1', modele: 'Model1', fabriquant: 'Fab1' },
  { tag: '2', modele: 'Model2', fabriquant: 'Fab2' },
];

const oneOrdinateur = ordinateurArray[0];

describe('OrdinateurController', () => {
  let controller: OrdinateurController;
  let service: OrdinateurService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdinateurController],
      providers: [
        {
          provide: OrdinateurService,
          useValue: {
            create: jest.fn().mockResolvedValue(oneOrdinateur),
            findAll: jest.fn().mockResolvedValue(ordinateurArray),
            findOne: jest.fn().mockResolvedValue(oneOrdinateur),
            update: jest.fn().mockResolvedValue(oneOrdinateur),
            remove: jest.fn().mockResolvedValue(oneOrdinateur),
          },
        },
      ],
    }).compile();

    controller = module.get<OrdinateurController>(OrdinateurController);
    service = module.get<OrdinateurService>(OrdinateurService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create an ordinateur', async () => {
    expect(await controller.create(oneOrdinateur)).toEqual(oneOrdinateur);
  });

  it('should get all ordinateurs', async () => {
    expect(await controller.findAll()).toEqual(ordinateurArray);
  });

  it('should get one ordinateur', async () => {
    expect(await controller.findOne('1')).toEqual(oneOrdinateur);
  });

  it('should update an ordinateur', async () => {
    expect(await controller.update('1', oneOrdinateur)).toEqual(oneOrdinateur);
  });

  it('should delete an ordinateur', async () => {
    expect(await controller.remove('1')).toEqual(oneOrdinateur);
  });
});
