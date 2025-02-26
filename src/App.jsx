import React, { useState } from "react";
import axios from "axios";
import { LoaderCircle } from "lucide-react";

const App = () => {
  const [text, setText] = useState("");
  const [selectval, setSelectval] = useState("");
  const [resval, setResval] = useState("");
  const [loading, setLoading] = useState(false);

  const handletexttranslate = async () => {
    setLoading(true);
    try {
      const options = {
        method: "POST",
        url: "https://google-translator9.p.rapidapi.com/v2",
        headers: {
          "x-rapidapi-key":
            "39f60ffae0msh04dba780f1bc450p1da18ejsn3210f3b8ba0e",
          "x-rapidapi-host": "google-translator9.p.rapidapi.com",
          "Content-Type": "application/json",
        },
        data: {
          q: `${text}`,
          source: `en`,
          target: `${selectval}`,
          format: "text",
        },
      };
      const response = await axios.request(options);
      setLoading(false);
      setResval(
        response?.data?.data?.translations?.[Number(0)]?.translatedText
      );
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-slate-100 to-slate-300 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
        <h1 className="text-3xl text-zinc-700 font-bold text-center mb-8 animate-fade-in">Text Translator</h1>

        <div className="flex flex-col gap-6">
          <textarea
            name="input-text"
            className="bg-slate-50 min-h-[120px] w-full border border-slate-300 outline-none rounded-lg text-lg px-5 py-3 transition-all duration-200 focus:ring-2 focus:ring-slate-400 focus:border-transparent"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text to translate..."
          />
          
          <div className="relative flex justify-center">
            <div className={`w-12 h-12 flex items-center justify-center transition-opacity duration-300 ${loading ? 'opacity-100' : 'opacity-0'}`}>
            </div>
          </div>

          <textarea
            name="output-text"
            className="bg-slate-50 min-h-[120px] w-full border border-slate-300 outline-none rounded-lg text-lg px-5 py-3"
            value={resval}
            readOnly
            placeholder="Translation will appear here..."
          />
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-3">
            <label htmlFor="options" className="text-zinc-600 font-medium">Convert Into</label>
            <select
              name="value"
              className="bg-slate-50 px-4 py-2 rounded-lg border border-slate-300 outline-none cursor-pointer transition-all duration-200 hover:bg-slate-100 focus:ring-2 focus:ring-slate-400 focus:border-transparent"
              onChange={(e) => {
                setSelectval(e.target.value);
              }}
            >
              <option value="">Select</option>
              <option value="af">Afrikaans</option>
              <option value="sq">Albanian</option>
              <option value="am">Amharic</option>
              <option value="ar">Arabic</option>
              <option value="hy">Armenian</option>
              <option value="az">Azerbaijani</option>
              <option value="eu">Basque</option>
              <option value="be">Belarusian</option>
              <option value="bn">Bengali</option>
              <option value="bs">Bosnian</option>
              <option value="bg">Bulgarian</option>
              <option value="ca">Catalan</option>
              <option value="ceb">Cebuano</option>
              <option value="ny">Chichewa</option>
              <option value="zh">Chinese (Simplified)</option>
              <option value="zh-TW">Chinese (Traditional)</option>
              <option value="co">Corsican</option>
              <option value="hr">Croatian</option>
              <option value="cs">Czech</option>
              <option value="da">Danish</option>
              <option value="nl">Dutch</option>
              <option value="en">English</option>
              <option value="eo">Esperanto</option>
              <option value="et">Estonian</option>
              <option value="tl">Filipino</option>
              <option value="fi">Finnish</option>
              <option value="fr">French</option>
              <option value="fy">Frisian</option>
              <option value="gl">Galician</option>
              <option value="ka">Georgian</option>
              <option value="de">German</option>
              <option value="el">Greek</option>
              <option value="gu">Gujarati</option>
              <option value="ht">Haitian Creole</option>
              <option value="ha">Hausa</option>
              <option value="haw">Hawaiian</option>
              <option value="he">Hebrew</option>
              <option value="hi">Hindi</option>
              <option value="hmn">Hmong</option>
              <option value="hu">Hungarian</option>
              <option value="is">Icelandic</option>
              <option value="ig">Igbo</option>
              <option value="id">Indonesian</option>
              <option value="ga">Irish</option>
              <option value="it">Italian</option>
              <option value="ja">Japanese</option>
              <option value="jw">Javanese</option>
              <option value="kn">Kannada</option>
              <option value="kk">Kazakh</option>
              <option value="km">Khmer</option>
              <option value="rw">Kinyarwanda</option>
              <option value="ko">Korean</option>
              <option value="ku">Kurdish</option>
              <option value="ky">Kyrgyz</option>
              <option value="lo">Lao</option>
              <option value="la">Latin</option>
              <option value="lv">Latvian</option>
              <option value="lt">Lithuanian</option>
              <option value="lb">Luxembourgish</option>
              <option value="mk">Macedonian</option>
              <option value="mg">Malagasy</option>
              <option value="ms">Malay</option>
              <option value="ml">Malayalam</option>
              <option value="mt">Maltese</option>
              <option value="mi">Maori</option>
              <option value="mr">Marathi</option>
              <option value="mn">Mongolian</option>
              <option value="my">Myanmar (Burmese)</option>
              <option value="ne">Nepali</option>
              <option value="no">Norwegian</option>
              <option value="or">Odia (Oriya)</option>
              <option value="ps">Pashto</option>
              <option value="fa">Persian</option>
              <option value="pl">Polish</option>
              <option value="pt">Portuguese</option>
              <option value="pa">Punjabi</option>
              <option value="ro">Romanian</option>
              <option value="ru">Russian</option>
              <option value="sm">Samoan</option>
              <option value="gd">Scots Gaelic</option>
              <option value="sr">Serbian</option>
              <option value="st">Sesotho</option>
              <option value="sn">Shona</option>
              <option value="sd">Sindhi</option>
              <option value="si">Sinhala</option>
              <option value="sk">Slovak</option>
              <option value="sl">Slovenian</option>
              <option value="so">Somali</option>
              <option value="es">Spanish</option>
              <option value="su">Sundanese</option>
              <option value="sw">Swahili</option>
              <option value="sv">Swedish</option>
              <option value="tg">Tajik</option>
              <option value="ta">Tamil</option>
              <option value="te">Telugu</option>
              <option value="th">Thai</option>
              <option value="tr">Turkish</option>
              <option value="uk">Ukrainian</option>
              <option value="ur">Urdu</option>
              <option value="ug">Uyghur</option>
              <option value="uz">Uzbek</option>
              <option value="vi">Vietnamese</option>
              <option value="cy">Welsh</option>
              <option value="xh">Xhosa</option>
              <option value="yi">Yiddish</option>
              <option value="yo">Yoruba</option>
              <option value="zu">Zulu</option>
            </select>
          </div>
        </div>

        <button
          className="mt-8 bg-slate-700 text-slate-100 w-full sm:w-3/5 py-3 rounded-lg cursor-pointer mx-auto block transition-all duration-300 hover:bg-slate-600 active:scale-95 flex items-center justify-center"
          onClick={handletexttranslate}
        >
          {loading ? <LoaderCircle className="animate-spin" /> : "Translate"}
        </button>
      </div>
    </div>
  );
};

export default App;