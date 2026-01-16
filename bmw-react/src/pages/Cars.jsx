import React from "react";
import "../styles/car.css";

const Cars = () => {
  return (
    <main className="container">
      <section>
        <h1 className="section-title">Newest Models</h1>
        <div className="car-grid">
          {/* BMW 7 Series */}
          <div className="car-card">
            <div className="car-image">
              <img src="/BMW7/download.jpg" alt="BMW 7 Series" />
            </div>
            <div className="car-content">
              <h2>BMW 7 Series</h2>
              <h3 className="price">Starting at $86,800</h3>
              <ul className="features-list">
                <li>Redesigned exterior with iconic kidney grille</li>
                <li>Luxurious leather interior</li>
                <li>Hybrid variants available</li>
                <li>Rear-seat entertainment system</li>
              </ul>
            </div>
          </div>

          {/* BMW X5 */}
          <div className="car-card">
            <div className="car-image">
              <img src="/BMW X5/front-left-side-47.webp" alt="BMW X5" />
            </div>
            <div className="car-content">
              <h2>BMW X5</h2>
              <h3 className="price">Starting at $59,400</h3>
              <ul className="features-list">
                <li>Premium SUV with dynamic styling</li>
                <li>Intelligent xDrive all-wheel drive</li>
                <li>Spacious cargo area</li>
                <li>Advanced driver assistance</li>
              </ul>
            </div>
          </div>

          {/* BMW i4 */}
          <div className="car-card">
            <div className="car-image">
              <img src="/BMW i4/download.jpg" alt="BMW i4" />
            </div>
            <div className="car-content">
              <h2>BMW i4</h2>
              <h3 className="price">Starting at $55,400</h3>
              <ul className="features-list">
                <li>All-electric Gran Coupe</li>
                <li>Impressive electric range</li>
                <li>Sustainable interior materials</li>
                <li>Zero emissions performance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h1 className="section-title">Luxury Collection</h1>
        <div className="car-grid">
          {/* BMW M760i */}
          <div className="car-card">
            <div className="car-image">
              <img
                src="/BMW M760i xDrive/download.jpg"
                alt="BMW M760i xDrive"
              />
            </div>
            <div className="car-content">
              <h2>BMW M760i xDrive</h2>
              <h3 className="price">Starting at $156,700</h3>
              <ul className="features-list">
                <li>V12 engine for exhilarating performance</li>
                <li>Nappa leather interior</li>
                <li>Bowers & Wilkins Sound System</li>
                <li>Panoramic Sky Lounge LED roof</li>
              </ul>
            </div>
          </div>

          {/* BMW Alpina B7 xDrive - Adapted to card format */}
          <div className="car-card">
            <div className="car-image">
              <img
                src="/BMW Alpina B7 xDrive/images.jpg"
                alt="BMW Alpina B7 xDrive"
              />
            </div>
            <div className="car-content">
              <h2>BMW Alpina B7 xDrive</h2>
              <h3 className="price">Starting at $143,200</h3>
              <ul className="features-list">
                <li>
                  Handcrafted 4.4-liter V8 engine with Alpina enhancements.
                </li>
                <li>Exclusive Nappa leather upholstery and interior trim.</li>
                <li>
                  Alpina sport steering wheel with blue and green stitching.
                </li>
                <li>High-quality Merino leather headliner.</li>
              </ul>
            </div>
          </div>

          {/* BMW X7 M50i */}
          <div className="car-card">
            <div className="car-image">
              <img src="/BMW X7 M50i/images.jpg" alt="BMW X7 M50i" />
            </div>
            <div className="car-content">
              <h2>BMW X7 M50i</h2>
              <h3 className="price">Starting at $92,600</h3>
              <ul className="features-list">
                <li>Powerful 4.4-liter V8 engine with M Sport exhaust.</li>
                <li>
                  Opulent Vernasca leather interior with available six-passenger
                  configuration.
                </li>
                <li>Panoramic glass roof with Sky Lounge LED roof.</li>
              </ul>
            </div>
          </div>

          {/* BMW M8 Gran Coupe */}
          <div className="car-card">
            <div className="car-image">
              <img
                src="/BMW M8 Gran Coupe/images.jpg"
                alt="BMW M8 Gran Coupe"
              />
            </div>
            <div className="car-content">
              <h2>BMW M8 Gran Coupe</h2>
              <h3 className="price">Starting at $130,000</h3>
              <ul className="features-list">
                <li>4.4-liter V8 engine delivering M-level performance.</li>
                <li>M Sport seats in premium Full Merino leather.</li>
                <li>M Carbon roof for a sporty look.</li>
              </ul>
            </div>
          </div>

          {/* BMW i8 Roadster */}
          <div className="car-card">
            <div className="car-image">
              <img src="/Roadster/download.jpg" alt="BMW i8 Roadster" />
            </div>
            <div className="car-content">
              <h2>BMW i8 Roadster</h2>
              <h3 className="price">Starting at $147,500</h3>
              <ul className="features-list">
                <li>Futuristic plug-in hybrid powertrain.</li>
                <li>Electrically operated soft-top roof.</li>
                <li>Signature scissor doors.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h1 className="section-title">Best-Selling Models</h1>
        <div className="car-grid">
          {/* BMW 3 Series */}
          <div className="car-card">
            <div className="car-image">
              <img src="/BMW 3 Series/download.jpg" alt="BMW 3 Series" />
            </div>
            <div className="car-content">
              <h2>BMW 3 Series</h2>
              <h3 className="price">Starting at $41,250</h3>
              <ul className="features-list">
                <li>
                  Iconic sports sedan with a perfect blend of performance and
                  luxury.
                </li>
                <li>
                  Choice of powerful engines, including a plug-in hybrid option.
                </li>
                <li>Advanced technology features.</li>
              </ul>
            </div>
          </div>

          {/* BMW X5 */}
          <div className="car-card">
            <div className="car-image">
              <img src="/BMW X5/images.jpg" alt="BMW X5" />
            </div>
            <div className="car-content">
              <h2>BMW X5</h2>
              <h3 className="price">Starting at $59,400</h3>
              <ul className="features-list">
                <li>
                  Versatile luxury SUV with spacious and well-appointed
                  interior.
                </li>
                <li>
                  Powerful engine options, including a plug-in hybrid variant.
                </li>
              </ul>
            </div>
          </div>

          {/* BMW 5 Series */}
          <div className="car-card">
            <div className="car-image">
              <img src="/BMW 5 Series/images.jpg" alt="BMW 5 Series" />
            </div>
            <div className="car-content">
              <h2>BMW 5 Series</h2>
              <h3 className="price">Starting at $54,200</h3>
              <ul className="features-list">
                <li>
                  Midsize luxury sedan known for its comfort and performance.
                </li>
                <li>Efficient powertrains, including a hybrid option.</li>
              </ul>
            </div>
          </div>

          {/* BMW X3 */}
          <div className="car-card">
            <div className="car-image">
              <img src="/BMW X3/download.jpg" alt="BMW X3" />
            </div>
            <div className="car-content">
              <h2>BMW X3</h2>
              <h3 className="price">Starting at $43,700</h3>
              <ul className="features-list">
                <li>
                  Compact luxury SUV with a perfect balance of utility and
                  agility.
                </li>
                <li>
                  Multiple engine choices, including a performance-oriented M40i
                  variant.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="series-table-section">
        <h2 className="section-title">BMW Series Table</h2>
        <div className="series-table-wrapper">
          <table className="series-table">
            <thead>
              <tr>
                <th>Series</th>
                <th>Release Date</th>
                <th>Latest Model Date</th>
                <th>Average Price</th>
                <th>Horsepower</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>m1</td>
                <td>2012</td>
                <td>2023</td>
                <td>$45,000</td>
                <td>300 HP</td>
              </tr>
              <tr>
                <td>m2</td>
                <td>2016</td>
                <td>2023</td>
                <td>$58,000</td>
                <td>405 HP</td>
              </tr>
              <tr>
                <td>m3</td>
                <td>1986</td>
                <td>2023</td>
                <td>$70,000</td>
                <td>473 HP</td>
              </tr>
              <tr>
                <td>m4</td>
                <td>2014</td>
                <td>2023</td>
                <td>$69,900</td>
                <td>473 HP</td>
              </tr>
              <tr>
                <td>m5</td>
                <td>1984</td>
                <td>2023</td>
                <td>$105,100</td>
                <td>600 HP</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default Cars;
