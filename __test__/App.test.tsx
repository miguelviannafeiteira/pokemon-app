import App from "../src/App"
import store from "../src/redux/store"
import { Provider } from "react-redux"
import { screen, render, waitFor, fireEvent, within } from "@testing-library/react"

describe("<App />", () => {

    describe("<Header />", () => {
        test("Deve aparecer o campo de busca para buscar por pokemon", async () => {
            render(
                <Provider store={store}>
                    <App />
                </Provider>
            )

            expect(screen.getByPlaceholderText("Busque pelo pokemon")).toBeTruthy()
        })

        test("Ao buscar pelo nome rattata deve exibir somente um card de pokemon", async () => {
            render(
                <Provider store={store}>
                    <App />
                </Provider>
            )

            await waitFor(() => {
                expect(screen.getAllByTestId("pokemon-card")).toHaveLength(20)
            })

            const form = within(screen.getByTestId('form'))

            const input = form.getByPlaceholderText("Busque pelo pokemon")
            const button = form.getByTestId("form-button")
            fireEvent.change(input, { target: { value: 'rattata' } })
            fireEvent.click(button)

            await waitFor(() => {
                expect(screen.getAllByTestId("pokemon-card")).toHaveLength(1)
            })
        })

        test("Ao buscar por nome não existente deve aparecer a mensagem de pokemon não encontrado", async () => {
            render(
                <Provider store={store}>
                    <App />
                </Provider>
            )

            await waitFor(() => {
                expect(screen.getAllByTestId("pokemon-card")).toHaveLength(20)
            })

            const form = within(screen.getByTestId('form'))

            const input = form.getByPlaceholderText("Busque pelo pokemon")
            const button = form.getByTestId("form-button")
            fireEvent.change(input, { target: { value: 'não existe' } })
            fireEvent.click(button)

            await waitFor(() => {
                expect(screen.getByText("Nenhum Pokemon encontrado.")).toBeTruthy()
            })
        })
    })

    test("Deve exibir 20 pokemons", async () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        )

        await waitFor(() => {
            expect(screen.getAllByTestId("pokemon-card")).toHaveLength(20)
        })
    })

    describe("<Modal />", (() => {
        test("Ao clicar no primeiro pokemon deve exibir a sua modal", async () => {
            render(
                <Provider store={store}>
                    <App />
                </Provider>
            )

            await waitFor(() => {
                expect(screen.getAllByTestId("pokemon-card")).toHaveLength(20)
            })

            const firstPokemon = screen.getAllByTestId("pokemon-card")[0]
            fireEvent.click(firstPokemon)
            expect(screen.getByTestId("modal")).toBeTruthy()
        })

        test("Dentro da modal deve exibir duas Tabs com os títulos Dados e Sobre", async () => {
            render(
                <Provider store={store}>
                    <App />
                </Provider>
            )

            await waitFor(() => {
                expect(screen.getAllByTestId("pokemon-card")).toHaveLength(20)
            })

            const firstPokemon = screen.getAllByTestId("pokemon-card")[0]
            fireEvent.click(firstPokemon)

            const modal = within(screen.getByTestId('modal'))

            expect(modal.getByText("Dados")).toBeTruthy()
            expect(modal.getByText("Sobre")).toBeTruthy()
        })

        test("Dentro da Tab de Dados deve ter 6 informações", async () => {
            render(
                <Provider store={store}>
                    <App />
                </Provider>
            )

            await waitFor(() => {
                expect(screen.getAllByTestId("pokemon-card")).toHaveLength(20)
            })

            const firstPokemon = screen.getAllByTestId("pokemon-card")[0]
            fireEvent.click(firstPokemon)

            const modal = within(screen.getByTestId('modal'))
            expect(modal.getAllByTestId("labelValueComponent")).toHaveLength(6)
        })

        test("Dentro da Tab de Sobre deve ter 4 informações", async () => {
            render(
                <Provider store={store}>
                    <App />
                </Provider>
            )

            await waitFor(() => {
                expect(screen.getAllByTestId("pokemon-card")).toHaveLength(20)
            })

            const firstPokemon = screen.getAllByTestId("pokemon-card")[0]
            fireEvent.click(firstPokemon)

            const modal = within(screen.getByTestId('modal'))
            fireEvent.click(screen.getByText("Sobre"))

            expect(modal.getAllByTestId("labelValueComponent")).toHaveLength(3)
            expect(modal.getAllByTestId("abilities")).toHaveLength(1)
        })
    }))
})