import React, { FC, useState, useEffect, UIEvent } from 'react';
import { Swiper } from 'antd-mobile';
import request from '@/api/index';
import BoxList from '@/components/box/BoxList';
import { TBox } from '@/types/index/box';
import style from './index.module.less';

const Index: FC = () => {
  // 商品列表
  const [boxList, setBoxList] = useState<TBox[]>([]);

  // banner图
  const [banner, setBanner] = useState([
    {
      url: 'https://www.ibox.art/file/oss/test/image/nft-goods/7c9fe383530645788c1a1240a6c84985.jpg',
      link: '#'
    },
    {
      url: 'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
      link: '#'
    }
  ]);

  // 页数
  const [page, setPage] = useState<number>(0);

  // 加载锁
  const [loading, setLoading] = useState<boolean>(false);

  /**
   * 页底检查
   */
  function scrollBottom(event: UIEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement;
    if (window.screen.height + target.scrollTop >= target.scrollHeight) {
      fetchList();
    }
  }

  useEffect(() => {
    console.log('懒加载数据');
  }, [boxList]);

  useEffect(() => {
    window.addEventListener('scroll', scrollBottom as any);
    fetchList();

    return window.removeEventListener('scroll', scrollBottom as any);
  }, []);

  /**
   * 加载盲盒
   */
  function fetchList() {
    if (loading) return;

    setLoading(true);
    request.box
      .fetchList({
        data: {
          page,
          pageSize: 6
        }
      })
      .then(data => {
        if (Object.prototype.toString.call(data) === '[object Array]') {
          setBoxList(list => list.concat(data));
          setPage(n => n + 1);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className={style['container']} onScroll={scrollBottom}>
      <Swiper className={style['index-banner']} autoplay>
        {banner.map((item, index) => {
          return (
            <Swiper.Item key={index}>
              <div
                className={style['banner-item']}
                style={{ backgroundImage: `url(${item.url})` }}
              />
            </Swiper.Item>
          );
        })}
      </Swiper>
      <BoxList list={boxList} loading={loading} />
    </div>
  );
};

export default Index;
