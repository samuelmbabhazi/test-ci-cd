import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Apprenant, Prisma } from '@prisma/client';

@Injectable()
export class ApprenantService {
  constructor(private prisma: PrismaService) {}

  async create(data: Apprenant): Promise<Apprenant> {
    return this.prisma.apprenant.create({
      data,
    });
  }

  async findAll(): Promise<Apprenant[]> {
    return this.prisma.apprenant.findMany();
  }

  async findOne(matricule: string): Promise<Apprenant> {
    return this.prisma.apprenant.findUnique({
      where: { matricule },
    });
  }

  async update(
    matricule: string,
    data: Prisma.ApprenantUpdateInput,
  ): Promise<Apprenant> {
    return this.prisma.apprenant.update({
      where: { matricule },
      data,
    });
  }

  async remove(matricule: string): Promise<Apprenant> {
    return this.prisma.apprenant.delete({
      where: { matricule },
    });
  }
}
