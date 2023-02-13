/*
  Warnings:

  - You are about to drop the column `id_deliverman` on the `deliveries` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "deliveries" DROP CONSTRAINT "deliveries_id_deliverman_fkey";

-- AlterTable
ALTER TABLE "deliveries" DROP COLUMN "id_deliverman",
ADD COLUMN     "id_deliveryman" TEXT,
ALTER COLUMN "end_at" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_id_deliveryman_fkey" FOREIGN KEY ("id_deliveryman") REFERENCES "deliveryman"("id") ON DELETE SET NULL ON UPDATE CASCADE;
