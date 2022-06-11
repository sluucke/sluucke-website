/*
  Warnings:

  - Added the required column `slug` to the `Posts` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Posts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "short_description" TEXT NOT NULL,
    "time_to_read" TEXT NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "authorId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    CONSTRAINT "Posts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Posts" ("authorId", "content", "createdAt", "id", "likes", "short_description", "time_to_read", "title", "updatedAt") SELECT "authorId", "content", "createdAt", "id", "likes", "short_description", "time_to_read", "title", "updatedAt" FROM "Posts";
DROP TABLE "Posts";
ALTER TABLE "new_Posts" RENAME TO "Posts";
CREATE UNIQUE INDEX "Posts_id_key" ON "Posts"("id");
CREATE UNIQUE INDEX "Posts_slug_key" ON "Posts"("slug");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
