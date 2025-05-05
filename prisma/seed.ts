import { prisma } from '../lib/prisma';
import {
  BaseInfo,
  aboutInfo,
  projectData,
  skillsData,
  blogs,
  contactData,
} from '../Data/data';

async function main() {
  try {
    await prisma.$connect();
    console.log('✅ Connected to DB');

    // BaseInfo
    console.log('🌱 Seeding BaseInfo');
    await prisma.baseInfo.deleteMany({});
    await prisma.baseInfo.create({
      data: BaseInfo,
    });

    // AboutInfo
    console.log('🌱 Seeding AboutInfo');
    await prisma.aboutInfo.deleteMany({});
    await prisma.aboutInfo.create({
      data: aboutInfo,
    });

    // Projects
    console.log('🌱 Seeding Projects');
    await prisma.project.deleteMany({});
    await prisma.project.createMany({
      data: projectData,
    });

    // Skills
    console.log('🌱 Seeding Skills');
    await prisma.skill.deleteMany({});
    await prisma.skill.createMany({
      data: skillsData,
    });

    // Blogs
    console.log('🌱 Seeding Blogs');
    await prisma.blog.deleteMany({});
    await prisma.blog.createMany({
      data: blogs,
    });

    // Contact
    console.log('🌱 Seeding Contact');
    await prisma.contact.deleteMany({});
    await prisma.contact.create({
      data: contactData,
    });

    console.log('✅ Seeding complete');
  } catch (e) {
    console.error('❌ Error during seeding:', e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
