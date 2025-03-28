// src/utils/domainUtils.js

export const DOMAINS = {
  STUDENT: "studentimpact.local",
  ORGANIZATION: "japanccc.local",
};

export const PRIMARY_DOMAIN = DOMAINS.STUDENT;

// src/utils/domainUtils.js

export function getCurrentDomain(request) {
  // Get the host from request headers
  const host = request.headers.get("host") || "";
  console.log("Detected host:", host);

  // More specific matching with regex to avoid partial matches
  if (/^studentimpact\.local/i.test(host) || /^studentimpact\.jp/i.test(host)) {
    return DOMAINS.STUDENT;
  }

  if (/^japanccc\.local/i.test(host) || /^japanccc\.org/i.test(host)) {
    return DOMAINS.ORGANIZATION;
  }

  // For debugging, log when we hit the default case
  console.log("No specific domain matched, using default:", PRIMARY_DOMAIN);
  return PRIMARY_DOMAIN;
}

export const CROSS_DOMAIN_REFS = {
  [DOMAINS.STUDENT]: {
    organization: `https://${DOMAINS.ORGANIZATION}`,
    about: `https://${DOMAINS.ORGANIZATION}/about`,
  },
  [DOMAINS.ORGANIZATION]: {
    students: `https://${DOMAINS.STUDENT}`,
    events: `https://${DOMAINS.STUDENT}/events`,
  },
};

export function getCanonicalUrl(currentDomain, path, pageType) {
  if (pageType === "shared") {
    return `https://${PRIMARY_DOMAIN}${path}`;
  }
  return `https://${currentDomain}${path}`;
}
