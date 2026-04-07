import './Company.css';

export default function Company() {
  return (
    <section className="section company-section" id="company">
      <div className="container">
        <h2 className="section-title">COMPANY</h2>
        <p className="section-subtitle">会社概要</p>

        <div className="company-table-wrap">
          <table className="company-table">
            <tbody>
              <tr>
                <th>会社名</th>
                <td>SAIKOKU STUDIO</td>
              </tr>
              <tr>
                <th>設立</th>
                <td>2026年3月5日</td>
              </tr>
              <tr>
                <th>所在地</th>
                <td>〒000-0000 東京都千代田区（※仮）</td>
              </tr>
              <tr>
                <th>事業内容</th>
                <td>
                  SOURCE+（知の基盤・メディア事業）<br/>
                  FIELD+（地方創生事業・実装領域）<br/>
                  LAB+（技術基盤・AI実装）
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
