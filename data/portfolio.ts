export type Domain = { title: string; phase: string; summary: string; tools: string[]; risks: string; workflow: string };
export const domains: Domain[] = [
  { title: "SAST", phase: "Code", summary: "Static analysis reviews source before execution to catch insecure patterns early.", tools: ["Semgrep", "SonarQube", "CodeQL"], risks: "Injection, unsafe APIs, authentication flaws and insecure coding patterns.", workflow: "Pull request scan → triage → developer fix → quality gate." },
  { title: "SCA", phase: "Code", summary: "Software composition analysis maps third-party components and their known risk.", tools: ["Trivy", "Snyk", "Dependabot"], risks: "Known CVEs, outdated packages and license risk.", workflow: "Lockfile scan → prioritized alert → safe version update → rescan." },
  { title: "DAST", phase: "Test", summary: "Dynamic testing probes a running application from the outside-in.", tools: ["OWASP ZAP", "Acunetix"], risks: "Runtime injection, insecure headers, exposed endpoints and auth weaknesses.", workflow: "Staging scan → validation → ticket → remediation test." },
  { title: "IAST", phase: "Test", summary: "Runtime instrumentation observes vulnerable data flows while the application is exercised.", tools: ["Runtime agents", "Test suites"], risks: "Execution paths that static and black-box testing miss.", workflow: "Instrument test environment → exercise flows → correlate evidence → fix." },
  { title: "ASPM", phase: "Operate", summary: "Application security posture management unifies findings, ownership and remediation context.", tools: ["Finding aggregation", "Risk correlation", "SLA tracking"], risks: "Unowned findings, duplicate alerts and missed high-impact exposure.", workflow: "Aggregate → correlate → prioritize → assign → verify closure." },
  { title: "DevSecOps", phase: "Every phase", summary: "Security guardrails become repeatable delivery controls, not late-stage gates.", tools: ["GitHub Actions", "GitHub Advanced Security", "Secret scanning"], risks: "Secrets in commits, insecure changes and unreviewed vulnerable releases.", workflow: "Lint → test → scan → policy gate → deploy evidence." },
  { title: "IaC Security", phase: "Build", summary: "Policy scanning evaluates cloud infrastructure before it is provisioned.", tools: ["Checkov", "Trivy", "Terraform"], risks: "Public storage, permissive IAM, weak encryption and open networks.", workflow: "Plan → scan → policy failure → review exception or remediate." },
  { title: "Container Security", phase: "Build", summary: "Hardened images limit the vulnerable surface carried into production.", tools: ["Docker", "Trivy", "Image SBOMs"], risks: "Vulnerable bases, root processes, secrets and unnecessary packages.", workflow: "Build → SBOM/vulnerability scan → sign → registry policy." },
  { title: "Kubernetes Security", phase: "Deploy", summary: "Cluster controls reduce workload blast radius and continuously validate configuration.", tools: ["Kubescape", "kube-bench", "Trivy"], risks: "Overbroad RBAC, privileged pods and missing network segmentation.", workflow: "Manifest scan → admission policy → posture review → monitor." }
];

export const projects = [
  ["DevSecOps Security Pipeline", "Example case study", "A reusable CI security pipeline for pull requests and releases.", ["GitHub Actions", "CodeQL", "Semgrep", "Trivy"]],
  ["Web Application Security Assessment", "Example case study", "A structured authenticated assessment and remediation workflow.", ["OWASP ZAP", "Threat modeling", "API testing"]],
  ["Container Security Pipeline", "Example case study", "Secure image build standards with SBOM and policy enforcement.", ["Docker", "Trivy", "Non-root images"]],
  ["Kubernetes Security Assessment", "Example case study", "A posture review centered on RBAC, policies and workload hardening.", ["Kubescape", "kube-bench", "NetworkPolicy"]],
  ["Infrastructure-as-Code Security", "Example case study", "Shift-left guardrails for Terraform-based cloud changes.", ["Terraform", "Checkov", "Trivy"]],
  ["SAST Implementation", "Example case study", "Developer-friendly rules, triage and remediation feedback loops.", ["Semgrep", "SonarQube", "CodeQL"]]
] as const;

export const skills = ["Application Security", "Secure SDLC", "SAST", "SCA", "DAST", "IAST", "ASPM", "API Security", "DevSecOps", "GitHub Advanced Security", "IaC Security", "Container Security", "Kubernetes Security", "Security Automation"];
