// ...

console.log(process.env.NODE_ENV);
describe("/post", () => {
  it("should get empty array", async () => {
    const buff2 = Buffer.from(ADMIN_AUTH, "utf8");
    const codedAuth = buff2.toString("base64");
    const res = await req
      .get(PATH.POSTS)
      .set({ Authorisation: "Basic " + codedAuth })
      .expect(200);

    // console.log(res.body)

    // expect(res.body.length).toBe(0)
  });
});

// ...

// база данных для тестов
import { MongoMemoryServer } from "mongodb-memory-server";

// запуск виртуального сервера с временной бд
const server = await MongoMemoryServer.create();

const uri = server.getUri();
const client: MongoClient = new MongoClient(uri);

// ...

// остановка виртуально сервера с бд после выполнения тестов
await server.stop();
