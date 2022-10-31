import { useState, useEffect, useRef } from "react";
import HeadLessTippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import AccountItem from "~/components/AccountItem";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./Search.module.scss";
import useDebounce from "~/hooks/useDebounce";
import * as searchServices from "~/service/searchService";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const debounced = useDebounce(searchValue, 800);
  const handleClearInput = () => {
    setSearchValue("");
    inputRef.current.focus();
    setShowResult(false);
  };
  const handleHideResult = () => {
    setShowResult(false);
  };
  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }
    const fetchApi = async () => {
      setLoading(true);
      const res = await searchServices.search(debounced);
      setSearchResult(res);
      setLoading(false);
      setShowResult(true);
    };
    fetchApi();
  }, [debounced]);

  const handleChangevalue = (e) => {
    let searchInput = e.target.value;
    if (!searchInput.startsWith(" ")) {
      setSearchValue(searchInput);
    }
  };
  return (
    //sing a wrapper <div> tag around the reference element solves
    //this by creating a new parentNode context.
    <div>
      <HeadLessTippy
        visible={searchResult.length > 0 && showResult}
        interactive
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
              ))}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx("search")}>
          <input
            type="text"
            ref={inputRef}
            value={searchValue}
            placeholder="Search accounts and videos"
            spellCheck="false"
            onChange={handleChangevalue}
            onFocus={() => setShowResult(true)}
          />
          {!!searchValue && !loading && (
            <button className={cx("clear")} onClick={handleClearInput}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && (
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
          )}
          <button
            className={cx("search-btn")}
            onMouseDown={(e) => e.preventDefault()}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </HeadLessTippy>
    </div>
  );
}

export default Search;
