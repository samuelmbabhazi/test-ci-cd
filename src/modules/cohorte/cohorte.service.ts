import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Cohorte, Prisma } from '@prisma/client';

@Injectable()
export class CohorteService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.CohorteCreateInput): Promise<Cohorte> {
    return this.prisma.cohorte.create({
      data,
    });
  }

  async findAll(): Promise<Cohorte[]> {
    return this.prisma.cohorte.findMany();
  }

  async findOne(code: string): Promise<Cohorte> {
    return this.prisma.cohorte.findUnique({
      where: { code },
    });
  }

  async update(
    code: string,
    data: Prisma.CohorteUpdateInput,
  ): Promise<Cohorte> {
    return this.prisma.cohorte.update({
      where: { code },
      data,
    });
  }

  async remove(code: string): Promise<Cohorte> {
    return this.prisma.cohorte.delete({
      where: { code },
    });
  }
}
