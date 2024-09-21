import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLongArrowAltRight } from 'react-icons/fa';

const ComunityNews = ({ data13 }) => {
  const getFeaturedItems = (data, isFeatured, limit = null) => {
    const filtered = data.filter((item) => item.is_featured === isFeatured);
    if (isFeatured === 1) {
      const sorted = filtered.sort(
        (a, b) => new Date(b.published_at) - new Date(a.published_at)
      );
      return sorted.length > 0 ? [sorted[0]] : [];
    }
    return limit ? filtered.slice(0, limit) : filtered;
  };

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', options);
  };

  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(' ') + '...'
      : text;
  };

  return (
    <>
      <div>
        {getFeaturedItems(data13, 1).map((item) => (
          <div
            key={item.id}
            className="card mb-4 shadow-sm border-0 side-bar-cards"
          >
            <Link href={`/news-detail/${item?.id}`}>
              <div className="card-body p-0">
                <Image
                  className="img-fluid w-100"
                  src={`https://ajkal.us/img/news/${item.title_img}`}
                  alt={item.news_title}
                  layout="responsive"
                  width={700}
                  height={700}
                  placeholder="blur"
                  blurDataURL="https://ajkal.us/img/settings/placeholder.jpg"
                />
                <div className="content p-3">
                  <h5>{truncateText(item.news_title, 10)}</h5>
                  <div className="d-flex justify-content-between align-items-center pt-3">
                    <p className="text-gray fw-bold" style={{ fontSize: '12px' }}>
                      {item.category_name}
                    </p>
                    <p className="text-gray fw-bold" style={{ fontSize: '12px' }}>
                      {formatDate(item.news_time)}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div>
        {getFeaturedItems(data13, 2, 6).map((item) => (
          <div key={item.id} className="card p-3 mb-2 title-cards">
            <Link href={`/news-detail/${item?.id}`}>
              <p className="pb-0">
                <FaLongArrowAltRight className="pe-1" />
                <span className="ps-1 text-site">
                  {truncateText(item.news_title, 7)}
                </span>
              </p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ComunityNews;
