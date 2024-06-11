import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Ordinateur, Prisma } from '@prisma/client';

@Injectable()
export class OrdinateurService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.OrdinateurCreateInput): Promise<Ordinateur> {
    return this.prisma.ordinateur.create({
      data,
    });
  }

  async findAll(): Promise<Ordinateur[]> {
    return this.prisma.ordinateur.findMany();
  }

  async findOne(tag: string): Promise<Ordinateur> {
    return this.prisma.ordinateur.findUnique({
      where: { tag },
    });
  }

  async update(
    tag: string,
    data: Prisma.OrdinateurUpdateInput,
  ): Promise<Ordinateur> {
    return this.prisma.ordinateur.update({
      where: { tag },
      data,
    });
  }

  async remove(tag: string): Promise<Ordinateur> {
    return this.prisma.ordinateur.delete({
      where: { tag },
    });
  }
}
