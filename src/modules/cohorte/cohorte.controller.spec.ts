import { Test, TestingModule } from '@nestjs/testing';
import { CohorteController } from './cohorte.controller';
import { CohorteService } from './cohorte.service';

const cohorteArray = [
  { code: '1', description: 'Description1' },
  { code: '2', description: 'Description2' },
];

const oneCohorte = cohorteArray[0];

describe('CohorteController', () => {
  let controller: CohorteController;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let service: CohorteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CohorteController],
      providers: [
        {
          provide: CohorteService,
          useValue: {
            create: jest.fn().mockResolvedValue(oneCohorte),
            findAll: jest.fn().mockResolvedValue(cohorteArray),
            findOne: jest.fn().mockResolvedValue(oneCohorte),
            update: jest.fn().mockResolvedValue(oneCohorte),
            remove: jest.fn().mockResolvedValue(oneCohorte),
          },
        },
      ],
    }).compile();

    controller = module.get<CohorteController>(CohorteController);
    service = module.get<CohorteService>(CohorteService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a cohorte', async () => {
    expect(await controller.create(oneCohorte)).toEqual(oneCohorte);
  });

  it('should get all cohortes', async () => {
    expect(await controller.findAll()).toEqual(cohorteArray);
  });

  it('should get one cohorte', async () => {
    expect(await controller.findOne('1')).toEqual(oneCohorte);
  });

  it('should update a cohorte', async () => {
    expect(await controller.update('1', oneCohorte)).toEqual(oneCohorte);
  });

  it('should delete a cohorte', async () => {
    expect(await controller.remove('1')).toEqual(oneCohorte);
  });
});
