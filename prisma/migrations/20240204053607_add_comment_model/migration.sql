-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "user_email" TEXT NOT NULL,
    "movie_id" TEXT NOT NULL,
    "comment" VARCHAR(255) NOT NULL,
    "username" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);
