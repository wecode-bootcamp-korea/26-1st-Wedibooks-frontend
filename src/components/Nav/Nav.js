/* eslint-disable */
import React, { Component } from 'react';
import { RiHome2Fill, RiShoppingCartFill } from 'react-icons/ri';
import { HiViewList } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { MENU_LISTS } from './MenuLists';
import './Nav.scss';

export class Nav extends Component {
  constructor() {
    super();
    this.state = {
      isOpened: false,
    };
  }

  handleMenu = () => {
    const { isOpened } = this.state;
    this.setState({
      isOpened: !isOpened,
    });
  };

  render() {
    const { isOpened } = this.state;

    return (
      <header className="nav">
        <nav className="navTotal">
          <div className="search">
            <Link to="/" className="logoName">
              WEDIBOOKS
            </Link>
            <input
              className="searchInput"
              type="text"
              placeholder="제목, 저자, 출판사 검색"
            />
            <div>
              <button className="cashButton" type="button">
                {isOpened ? '회원가입' : '캐시 충전'}
              </button>
              <button className="myBooksButton" type="button">
                {isOpened ? '로그인' : '내 서재'}
              </button>
            </div>
          </div>
          <div className="homeCart">
            <Link to="/footer">
              <RiHome2Fill className="homeIcon" />
              <span className="menuText">HOME</span>
            </Link>

            <Link to="/footer">
              <RiShoppingCartFill className="cartIcon" />
              <span className="menuText">CART</span>
            </Link>
          </div>
        </nav>

        <section className="navCategory">
          <HiViewList className="listIcon" onClick={this.handleMenu} />

          <span className="novel" onClick={this.handleMenu}>
            소설
          </span>

          <span className="computer" onClick={this.handleMenu}>
            컴퓨터/IT
          </span>
        </section>

        {isOpened && (
          <div className="navDropList">
            <ul className="novelDropList">
              {MENU_LISTS.slice(0, 8).map(el => {
                return (
                  <li className="subLi" key={el.id}>
                    {el.novelList}
                  </li>
                );
              })}
            </ul>
            <ul className="itDropList">
              {MENU_LISTS.slice(8).map(el => {
                return (
                  <li className="subLi" key={el.id}>
                    {el.novelList}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </header>
    );
  }
}

export default Nav;
