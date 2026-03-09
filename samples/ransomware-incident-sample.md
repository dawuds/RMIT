# Worked Example: Ransomware Incident Report (Bank-X)

> **AI Disclaimer:** This is a **SAMPLE** completed template for educational purposes. It does not represent a real incident.
> **Audit Evidence Reference:** RMiT 11.13 | Incident Response

## 1. Incident Overview
*   **Incident ID:** INC-2026-001
*   **Discovery Date/Time:** 2026-03-08 09:15 AM MYT
*   **System(s) Affected:** Core Lending System (Production), Tier-1 Backup NAS
*   **Severity Level:** CRITICAL (Service Interruption > 4 Hours)

## 2. Description of Event
At 09:15 AM, system alerts triggered for high CPU usage on the core lending server. By 09:30 AM, users reported "Access Denied" errors. Investigation revealed file extensions renamed to `.locked` and a ransom note from the 'LockBit-MY' variant demanding 50 BTC.

## 3. Immediate Actions Taken
*   **Isolation:** Disconnected the core lending VLAN from the primary data centre switch.
*   **Escalation:** Notified CISO and invoked the Crisis Management Team at 09:45 AM.
*   **Notification:** Verbal notification to BNM Supervision at 10:30 AM (within 2-hour window for critical systems).

## 4. Root Cause Analysis
Initial access via a phishing email opened by a contract staff in the Loan Processing department. Credentials harvested via a look-alike login page (bypass of legacy MFA on that specific terminal).

## 5. Recovery Plan
*   **Status:** Restoration from off-site immutable backups initiated at 11:00 AM.
*   **Estimated Time to Restore (ETR):** 6 Hours.

---
**Prepared By:** J. Doe (Security Ops)
**Approved By:** CISO
**Date:** 2026-03-08
