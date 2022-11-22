-- CreateTable
CREATE TABLE "Guest" (
    "id" INT4 NOT NULL DEFAULT unique_rowid(),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "firstName" STRING NOT NULL,
    "lastName" STRING NOT NULL,
    "email" STRING NOT NULL,
    "phoneNumber" STRING NOT NULL,
    "fiscalCode" STRING NOT NULL,
    "address" STRING NOT NULL,

    CONSTRAINT "Guest_pkey" PRIMARY KEY ("id")
);
