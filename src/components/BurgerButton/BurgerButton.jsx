import classNames from 'classnames'

const BurgerButton = ({
                          className,
                          title = 'Открыть меню',
                          extraAttrs = {},
                      }) => (
    <button
        {...extraAttrs}
        className={classNames('burger-button', className, extraAttrs.className)}
        aria-label={title}
        type="button"
    >
        <svg
            className="burger-button__svg"
            viewBox="0 0 100 100"
            width="68"
            height="68"
            aria-hidden="true"
            focusable="false"
        >
            <path className="burger-button__line top"
                  d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272" />
            <path className="burger-button__line middle"
                  d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272" />
            <path className="burger-button__line bottom"
                  d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272" />
        </svg>
    </button>
)

export default BurgerButton
