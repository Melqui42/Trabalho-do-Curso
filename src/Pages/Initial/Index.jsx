import * as Ai from "react-icons/ai";
import * as Gi from "react-icons/gi";
import * as Bi from "react-icons/bi";
import * as Hi from "react-icons/hi";
import * as Md from "react-icons/md";
import * as Io5 from "react-icons/io5";

import Style from "./Style.module.scss";

export default function Initial() {
  return (
    <div className={Style.Container}>
      <div className={Style.LeftSideBar}>
        <div className={Style.Center}>
          <img src={require("../../Assets/Sem Título-1.png")} alt="" />
          <ul>
            <li>
              <button>Explorar</button>
            </li>
            <li>
              <button>Camisas</button>
            </li>
            <li>
              <button>Calças</button>
            </li>
            <li>
              <button>Favoritos</button>
            </li>
            <li>
              <button>Categorias</button>
            </li>
          </ul>
          <button className={Style.LogOut}>Sair</button>
        </div>
      </div>
      <div className={Style.Body}>
        <header>
          <nav>
            <div className={Style.InputSearch}>
              <button>
                <Hi.HiSearch />
              </button>
              <input type="text" placeholder="Pesquisar itens" />
            </div>
            <button className={Style.UserButton}>
              <img src={require("../../Assets/Screenshot_2.png")} alt="" />
              <p>Melqui</p>
            </button>
          </nav>
        </header>
        <div className={Style.Content}>
          <div className={Style.Center}>
            <section>
              <div className={Style.Image}>
                <h1>GANHE ATÉ 50% DE DESCONTO</h1>
              </div>
              <div>
                <h1>Popular agora</h1>
                <ul className={Style.List}>
                  <li>
                    <div className={Style.Card}>
                      <img src={require("../../Assets/Screenshot_23.png")} alt="" />
                      <ul>
                        <li>
                          <p>Blusão Gonew - Preto</p>
                        </li>
                        <li>
                          <p>R$ 54,99</p>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={Style.Card}>
                      <img src={require("../../Assets/Screenshot_25.png")} alt="" />
                      <ul>
                        <li>
                          <p>Blusão Gonew - Verde</p>
                        </li>
                        <li>
                          <p>R$ 54,99</p>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={Style.Card}>
                      <img src={require("../../Assets/Screenshot_24.png")} alt="" />
                      <ul>
                        <li>
                          <p>Calça Moletom Slin - Preto</p>
                        </li>
                        <li>
                          <p>R$ 39,99</p>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={Style.Card}>
                      <img src={require("../../Assets/Screenshot_27.png")} alt="" />
                      <ul>
                        <li>
                          <p>Camiseta Longline - Preto</p>
                        </li>
                        <li>
                          <p>R$ 37,99</p>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
            <div className={Style.RightSidebar}>
              <div className={Style.OrderList}>
                <div className={Style.Top}>
                  <h1>Lista de Pedidos</h1>
                  <button>
                    <h2>Ver Todos</h2>
                  </button>
                </div>
                <ul className={Style.List}>
                  <li>
                    <div className={Style.Card}>
                      <div>
                        <img src={require("../../Assets/Screenshot_20.png")} alt="" />
                        <ul>
                          <li>
                            <p>Camiseta Oversized Preto</p>
                          </li>
                          <li>
                            <span>R$49,50</span>
                          </li>
                        </ul>
                      </div>
                      <span>X1</span>
                    </div>
                  </li>
                  <li>
                    <div className={Style.Card}>
                      <div>
                        <img src={require("../../Assets/Screenshot_21.png")} alt="" />
                        <ul>
                          <li>
                            <p>Bermuda Moletom Azul</p>
                          </li>
                          <li>
                            <span>R$69,50</span>
                          </li>
                        </ul>
                      </div>
                      <span>X1</span>
                    </div>
                  </li>
                  <li>
                    <div className={Style.Card}>
                      <div>
                        <img src={require("../../Assets/Screenshot_22.png")} alt="" />
                        <ul>
                          <li>
                            <p>Boné de beisebol</p>
                          </li>
                          <li>
                            <span>R$18,50</span>
                          </li>
                        </ul>
                      </div>
                      <span>X1</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className={Style.Line}></div>
              <div className={Style.Summary}>
                <h2>Resumo</h2>
                <ul>
                  <li>
                    <p>Valor Total dos Produtos</p>
                    <span>R$137,70</span>
                  </li>
                  <li>
                    <p>Entrega e manuseio estimados</p>
                    <span>R$0</span>
                  </li>
                  <li>
                    <h2>Total</h2>
                    <span>R$137,70</span>
                  </li>
                </ul>
                <button>Confirmar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
