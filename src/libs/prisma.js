import { PrismaClient } from "@prisma/client";

// const prismaClientSingleton = () => {
//   return new PrismaClient();
// };

// const prisma = globalThis.prisma ?? prismaClientSingleton();

// if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

// export const db = prisma;
// /**
//  * @typedef {object} CustomGlobal
//  * @property {PrismaClient} [prisma]
//  */
// /** @type {CustomGlobal & typeof global} */
// let prisma;
// if (process.env.NODE_ENV === "production") {
//   prisma = new PrismaClient();
// } else {
//   if (!global.prisma) {
//     global.prisma = new PrismaClient();
//   }
//   prisma = global.prisma;
// }

// export const db = prisma;
/**
 * @typedef {object} GlobalWithPrisma
 * @property {PrismaClient} [prisma] - Optional Prisma client instance stored globally.
 */

// Deklarasikan 'prisma' dengan tipe yang eksplisit menggunakan JSDoc
/** @type {PrismaClient} */
let prisma;

if (process.env.NODE_ENV === "production") {
  // Dalam produksi, selalu buat instance baru
  prisma = new PrismaClient();
} else {
  // Dalam pengembangan, gunakan singleton global
  /** @type {GlobalWithPrisma & typeof globalThis} */
  const globalContext = globalThis; // Menggunakan globalThis untuk kompatibilitas lingkungan (Node.js/Browser)

  if (!globalContext.prisma) {
    globalContext.prisma = new PrismaClient();
  }
  prisma = globalContext.prisma;
}

// Ekspor instance yang sudah ditandai tipenya
export const db = prisma; // Atau module.exports = { db: prisma }; jika CommonJS
