import { M } from "./01_pb";

const m = new M();
m.setE01(M.E.B);
m.setE02(M.E.C);
console.assert(JSON.stringify(m.toObject()) === '{"e01":9,"e02":9}');
