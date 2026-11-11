import { decodeEntities, excerpt, parseMediumFeed } from "../lib/parseMediumFeed";

const feed = `<?xml version="1.0"?><rss><channel>
  <item>
    <title><![CDATA[My First Hackathon]]></title>
    <link>https://msahalkc.medium.com/my-first-hackathon-beff19e8c5aa?source=rss-abc</link>
    <pubDate>Tue, 04 Mar 2025 15:51:12 GMT</pubDate>
    <content:encoded><![CDATA[<figure><img src="x.png"><figcaption>cover</figcaption></figure><p>Even though I had been part of organizing a hackathon, I &amp; the team went.</p>]]></content:encoded>
  </item>
  <item>
    <title><![CDATA[]]></title>
    <link>https://example.com/no-title</link>
  </item>
</channel></rss>`;

describe("parseMediumFeed", () => {
  test("reads title, clean link, ISO date and a text summary", () => {
    expect(parseMediumFeed(feed)).toEqual([
      {
        title: "My First Hackathon",
        url: "https://msahalkc.medium.com/my-first-hackathon-beff19e8c5aa",
        date: "2025-03-04",
        summary: "Even though I had been part of organizing a hackathon, I & the team went.",
      },
    ]);
  });

  test("returns an empty list for a feed without items", () => {
    expect(parseMediumFeed("<rss><channel></channel></rss>")).toEqual([]);
  });

  test("excerpt trims long text to whole words with an ellipsis", () => {
    const words = Array.from({ length: 40 }, (_, i) => `w${i}`).join(" ");
    expect(excerpt(`<p>${words}.</p>`, 5)).toBe("w0 w1 w2 w3 w4…");
  });

  test("decodes named and numeric entities", () => {
    expect(decodeEntities("you&#8217;ll &lt;3 &#x26; &quot;it&quot;")).toBe("you’ll <3 & \"it\"");
  });
});
