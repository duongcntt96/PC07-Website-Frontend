import React, { useState } from "react";

const Item = ({ e }) => {
  const [isTreeShowing, setIsTreeShowing] = useState(true);
  const paramsURL = new URLSearchParams(window.location.search);
  const { ten, parent } = e;

  if (e.totals() || 0)
    return (
      <li>
        <h4
          onClick={() => setIsTreeShowing(!isTreeShowing)}
          className={`${isTreeShowing ? "caret caret-down" : "caret"}`}
        >
          {parent ? ten : ten.toUpperCase()} ({e.count()}) ({e.totals()})
        </h4>
        {e.chungloai.length ? (
          <>
            <ul className={`${isTreeShowing ? "nested active" : "nested"}`}>
              {e.chungloai.map((f) => {
                return <Item e={f} />;
              })}
              {e.phuongtien.map((pt) => (
                // Render item start
                <>
                  {pt.totals ? (
                    <li key={pt.id}>
                      <a
                        href={`qlpt/nhapkho/?kho_nhap=${
                          paramsURL.get("kho_nhap") || ""
                        }&chi_tiet_phieu_nhap__phuong_tien=${pt.id}`}
                      >
                        <span style={{ color: "green" }}>
                          - {pt.ten || pt.phuong_tien__ten}: {pt.totals} chiếc
                        </span>
                      </a>
                    </li>
                  ) : (
                    <></>
                  )}
                </>
                // Render item end
              ))}
            </ul>
          </>
        ) : (
          <>
            <ul className={`${isTreeShowing ? "nested active" : "nested"}`}>
              {e.phuongtien.map((pt) => (
                // Render item start
                <>
                  {pt.totals ? (
                    <li key={pt.id}>
                      <a
                        href={`qlpt/nhapkho/?kho_nhap=${
                          paramsURL.get("kho_nhap") || ""
                        }&chi_tiet_phieu_nhap__phuong_tien=${pt.id}`}
                      >
                        <span style={{ color: "green" }}>
                          - {pt.ten || pt.phuong_tien__ten}: {pt.totals} chiếc
                        </span>
                      </a>
                    </li>
                  ) : (
                    <></>
                  )}
                </>
                // Render item end
              ))}
            </ul>
          </>
        )}
      </li>
    );
  return <></>;
};

export default Item;
