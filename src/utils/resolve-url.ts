export default function resolveUrl(url: any) {
  const value = (() => {
    if (typeof url !== "string") return ""

    if (url.slice(0, "/icons/".length) === "/icons/") return url

    if (/http(s?):\/\//.test(url)) return url

    return `/icons/${ url }`
  })()

  if (!value) return value

  if (value.split(".").length < 2) return `${ value }.png`

  return value
}
