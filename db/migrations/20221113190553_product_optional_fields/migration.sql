-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "price" REAL,
    "relevancy" REAL,
    "brand" TEXT,
    "category" TEXT,
    "subcategory" TEXT
);
INSERT INTO "new_Product" ("brand", "category", "createdAt", "id", "name", "price", "relevancy", "subcategory", "updatedAt") SELECT "brand", "category", "createdAt", "id", "name", "price", "relevancy", "subcategory", "updatedAt" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
