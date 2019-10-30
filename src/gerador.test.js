import {
  rolarD6,
  gerarEquipamento,
  gerarNomeDoGoblin,
  calcularAtributoDeSorte,
  calcularAtributoDeCombate,
  calcularAtributoDeConhecimento,
  calcularAtributoDeHabilidade
} from "./gerador";
import tabelaGoblin from "./data/tabelaGoblin";

describe("Testes das funções geradoras", () => {
  it("gerarNomeDoGoblin deve retornar uma string", done => {
    const nomeDoGoblin = gerarNomeDoGoblin();

    expect(typeof nomeDoGoblin).toBe("string");
    done();
  });

  it("calcularAtributoDeCombate deve retornar um número", done => {
    const [coloracao, ocupacao] = [
      tabelaGoblin.coloracao[rolarD6()],
      tabelaGoblin.ocupacao[rolarD6()]
    ];

    expect(typeof calcularAtributoDeCombate(coloracao, ocupacao)).toBe(
      "number"
    );
    done();
  });

  it("calcularAtributoDeConhecimento deve retornar um número", done => {
    const [coloracao, ocupacao] = [
      tabelaGoblin.coloracao[rolarD6()],
      tabelaGoblin.ocupacao[rolarD6()]
    ];

    expect(typeof calcularAtributoDeConhecimento(coloracao, ocupacao)).toBe(
      "number"
    );
    done();
  });

  it("calcularAtributoDeHabilidade deve retornar um número", done => {
    const [coloracao, ocupacao] = [
      tabelaGoblin.coloracao[rolarD6()],
      tabelaGoblin.ocupacao[rolarD6()]
    ];

    expect(typeof calcularAtributoDeHabilidade(coloracao, ocupacao)).toBe(
      "number"
    );
    done();
  });

  it("calcularAtributoDeSorte deve retornar um número", done => {
    const [coloracao, ocupacao] = [
      tabelaGoblin.coloracao[rolarD6()],
      tabelaGoblin.ocupacao[rolarD6()]
    ];

    expect(typeof calcularAtributoDeSorte(coloracao, ocupacao)).toBe("number");
    done();
  });

  it("gerarEquipamento deve retornar uma string", done => {
    const ocupacao = tabelaGoblin.ocupacao[rolarD6()];

    expect(typeof gerarEquipamento(ocupacao)).toBe("string");
    done();
  });
});
