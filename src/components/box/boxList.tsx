import React, { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Empty } from 'antd-mobile';
import style from './boxList.module.less';
import { TBox } from '@/types/index/box';

interface IProps {
  list: TBox[];
  loading?: boolean;
}

const BoxList: FC<IProps> = props => {
  const { list, loading } = props;
  const navigate = useNavigate();

  return (
    <div>
      {list.length > 0 ? (
        <ul className={style['box-list']}>
          {list.map((item, key) => {
            return (
              <li
                key={key}
                className={style['box-item']}
                onClick={() => {
                  navigate(`/boxDetail/${item.id}`);
                }}
              >
                <div className={style['box-img']}>
                  <img src={item.boxImg} alt={item.title} />
                  <div className={style['box-tag']}>
                    {
                      ['未知', '在售中', '已售罄', '首发', '缺货', '私有'][
                        item.status
                      ]
                    }
                  </div>
                </div>
                <p className={style['box-title']}>{item.title}</p>
                <div className={style['box-author']}>
                  <img
                    src={item.authorPic}
                    alt={item.authorName}
                    className={style['author-pic']}
                  />
                  <span className={style['author-name']}>
                    {item.authorName}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        ''
      )}
      <>{loading ? <p className={style['loading-styl']}>加载中...</p> : ''}</>
      <>{list.length === 0 && !loading ? <Empty /> : ''}</>
    </div>
  );
};

export default memo(BoxList);
