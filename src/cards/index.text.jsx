import { maxPlayers } from "./index";

describe("Cards", () => {
  it("Pode calcular o número máximo de jogadores do objeto players", () => {
    const players = [{ number: 2 }, { number: 3 }, { number: 5 }];

    expect(maxPlayers(players)).toEqual(5);
  });
});
