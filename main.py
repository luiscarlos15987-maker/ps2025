print("==============================")
print("       ANALISADOR DE GASTOS")
print("==============================")


def calcular_percentual(valor, salario):
    return (valor / salario) * 100


def ler_valor(mensagem, permitir_zero=False):
    while True:
        try:
            valor = float(input(mensagem).replace(",", "."))

            if valor < 0:
                print("ERRO: O valor não pode ser negativo.")
                continue

            if valor == 0 and not permitir_zero:
                print("ERRO: O valor deve ser maior que zero.")
                continue

            return valor

        except ValueError:
            print("ERRO: Digite apenas números.")


def analisar_gastos():
    salario = ler_valor("Digite seu salário: R$ ")

    aluguel = ler_valor(
        "Digite o valor do aluguel: R$ ",
        permitir_zero=True
    )

    alimentacao = ler_valor(
        "Digite o valor da alimentação: R$ ",
        permitir_zero=True
    )

    transporte = ler_valor(
        "Digite o valor do transporte: R$ ",
        permitir_zero=True
    )

    internet = ler_valor(
        "Digite o valor da internet: R$ ",
        permitir_zero=True
    )

    energia = ler_valor(
        "Digite o valor da energia elétrica: R$ ",
        permitir_zero=True
    )

    agua = ler_valor(
        "Digite o valor da água: R$ ",
        permitir_zero=True
    )

    lazer = ler_valor(
        "Digite o valor do lazer: R$ ",
        permitir_zero=True
    )

    total_gastos = (
        aluguel
        + alimentacao
        + transporte
        + internet
        + energia
        + agua
        + lazer
    )

    saldo = salario - total_gastos

    print("\n==============================")
    print("         RESULTADO")
    print("==============================")

    print(f"Total de gastos: R$ {total_gastos:.2f}")
    print(f"Saldo restante: R$ {saldo:.2f}")

    percentual_gastos = calcular_percentual(
        total_gastos,
        salario
    )

    print(
        f"Percentual do salário comprometido: "
        f"{percentual_gastos:.1f}%"
    )

    if percentual_gastos > 70:
        print("ATENÇÃO: Seus gastos estão muito altos.")

    elif percentual_gastos >= 50:
        print(
            "CUIDADO: Mais da metade do seu salário "
            "está comprometida."
        )

    else:
        print("SITUAÇÃO: Seus gastos estão sob controle.")

    percentual_sobra = calcular_percentual(
        saldo,
        salario
    )

    print(
        f"Percentual do salário disponível: "
        f"{percentual_sobra:.1f}%"
    )

    gastos = {
        "Aluguel": aluguel,
        "Alimentação": alimentacao,
        "Transporte": transporte,
        "Internet": internet,
        "Energia elétrica": energia,
        "Água": agua,
        "Lazer": lazer
    }

    maior_gasto = max(gastos, key=gastos.get)
    valor_maior_gasto = gastos[maior_gasto]

    print(
        f"Maior gasto: {maior_gasto} - "
        f"R$ {valor_maior_gasto:.2f}"
    )

    print("\n--- PERCENTUAL POR CATEGORIA ---")

    for categoria, valor in gastos.items():
        percentual = calcular_percentual(valor, salario)
        print(f"{categoria}: {percentual:.1f}%")

    print("\n--- ALERTAS ---")

    if calcular_percentual(aluguel, salario) > 30:
        print(
            "ATENÇÃO: O aluguel representa uma parcela "
            "alta do seu salário."
        )

    if calcular_percentual(alimentacao, salario) >= 20:
        print(
            "ATENÇÃO: Os gastos com alimentação "
            "estão elevados."
        )

    if calcular_percentual(transporte, salario) > 15:
        print(
            "ATENÇÃO: Os gastos com transporte "
            "estão elevados."
        )

    if calcular_percentual(energia, salario) > 10:
        print(
            "ATENÇÃO: Os gastos com energia elétrica "
            "estão elevados."
        )

    if calcular_percentual(agua, salario) > 10:
        print(
            "ATENÇÃO: Os gastos com água estão elevados."
        )

    if calcular_percentual(lazer, salario) > 15:
        print(
            "ATENÇÃO: Os gastos com lazer estão elevados."
        )

    if percentual_sobra < 20:
        print(
            "RECOMENDAÇÃO: Tente reduzir seus gastos "
            "para aumentar sua reserva."
        )
    else:
        print(
            "SITUAÇÃO: Você possui uma margem razoável "
            "do salário disponível."
        )


while True:
    print("\n===== MENU =====")
    print("1 - Analisar gastos")
    print("2 - Sair")

    opcao = input("Escolha uma opção: ")

    if opcao == "1":
        analisar_gastos()

    elif opcao == "2":
        print("Programa encerrado.")
        break

    else:
        print("ERRO: Opção inválida.")