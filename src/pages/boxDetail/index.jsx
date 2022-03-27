import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { LeftOutline, LoopOutline } from 'antd-mobile-icons';
import momnent from 'moment';
import request from '@/api/index';
import style from './boxDetail.module.less';
import boxBg from '@/assets/images/light_bg.png';
const BoxDetail = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const params = useParams();
    const [info, setInfo] = useState({
        id: 0,
        boxImg: '',
        title: '',
        authorPic: '',
        authorName: '-',
        desc: '',
        sellLimit: 0,
        onSale: 0,
        price: 0,
        priceUnit: '',
        onSaleTime: 0
    });
    function getBoxDetail(bId) {
        if (!bId || loading)
            return;
        setLoading(true);
        request.box
            .boxDetail({ data: { bId } })
            .then(data => {
            const structData = { ...info };
            Object.keys(data).forEach(key => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                structData[key] = data[key] || '-';
            });
            setInfo(structData);
        })
            .finally(() => {
            setLoading(false);
        });
    }
    useEffect(() => {
        const { bId } = params;
        getBoxDetail(bId);
    }, []);
    return (<div>
      <div className={style['back-icon']} onClick={() => navigate(-1)}>
        <LeftOutline color="#fff" fontSize={'0.5rem'}/>
      </div>
      {!loading ? (<div className={style['detail-container']}>
          <img src={boxBg} className={style['header-bg']}/>
          <div className={style['box-img']}>
            <img src={info.boxImg}/>
          </div>
          <section>
            <p className={style['section-title']}>{info.title}</p>
            <div dangerouslySetInnerHTML={{ __html: info.desc || '' }}/>
          </section>
          <section>
            <p className={style['section-title']}>关于作者</p>
            <a>{info.authorName}</a>
          </section>
          <section>
            <p className={style['section-title']}>售卖信息</p>
            <ul>
              <li className={style['info-item']}>
                <span className={style['info-title']}>售价：</span>
                <span className={style['info-tip']}>{`${info.price} ${info.priceUnit}`}</span>
              </li>
              <li className={style['info-item']}>
                <span className={style['info-title']}>上架时间：</span>
                <span className={style['info-tip']}>
                  {momnent(info.onSaleTime).format('YYYY年M月D日 hh:mm:ss')}
                </span>
              </li>
              <li className={style['info-item']}>
                <span className={style['info-title']}>剩余/总量：</span>
                <span className={style['info-tip']}>{`${info.onSale}/${info.sellLimit}`}</span>
              </li>
              <li className={style['info-item']}>
                <span className={style['info-title']}>作者：</span>
                <span className={style['info-tip']}>{info.authorName}</span>
              </li>
            </ul>
          </section>
        </div>) : (<div className={style['loading']}>
          <LoopOutline fontSize={24} color="#fa2c19"/>
          <p>加载中</p>
        </div>)}
    </div>);
};
export default BoxDetail;
//# sourceMappingURL=index.jsx.map