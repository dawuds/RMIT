import json

with open('RMIT/controls/library.json', 'r') as f:
    library = json.load(f)

# Domain: access-control
for c in library['access-control']:
    if c['slug'] == 'access-control-framework':
        c['clauses'] = ['10.53', '10.54']
    elif c['slug'] == 'identity-and-access-management':
        c['clauses'] = ['10.53', '10.54', '10.56']
    elif c['slug'] == 'multi-factor-authentication':
        c['clauses'] = ['10.55', '12.4']
    elif c['slug'] == 'password-management':
        c['clauses'] = ['10.54'] # Password is part of general principles/policy
    elif c['slug'] == 'privileged-access-management':
        c['clauses'] = ['10.56']
    elif c['slug'] == 'access-review-and-recertification':
        c['clauses'] = ['10.57']

# Domain: cybersecurity (Batch 1)
# 11.1: Cyber Risk Management
# 11.6: Red Team
# 11.8: Cyber Ops
# 11.9: SOC
# 11.11: VA
# 11.12: Crisis Management
# 11.13: Incident Response
# 11.18: Reporting
for c in library['cybersecurity']:
    if c['slug'] == 'incident-response-plan':
        c['clauses'] = ['11.13']
    elif c['slug'] == 'soc-operations':
        c['clauses'] = ['11.9']
    elif c['slug'] == 'penetration-testing':
        c['clauses'] = ['11.6'] # Red team / PT often grouped
    elif c['slug'] == 'vulnerability-assessment':
        c['clauses'] = ['11.11']
    elif c['slug'] == 'cyber-crisis-management':
        c['clauses'] = ['11.12']
    elif c['slug'] == 'threat-hunting':
        c['clauses'] = ['11.10'] # Continuous monitoring/threat intel
    elif c['slug'] == 'cybersecurity-strategy':
        c['clauses'] = ['11.2']

# Domain: service-continuity (Section 10.29-10.35)
# 10.29: Availability Objectives
# 10.30: Performance Monitoring
# 10.31: Digital Services Resilience
# 10.32: Critical System High Availability
# 10.34: Technology Diversity
# 10.35: Service Interruption Response
for c in library['service-continuity']:
    if c['slug'] == 'it-service-continuity':
        c['clauses'] = ['10.32', '10.35']
    elif c['slug'] == 'disaster-recovery':
        c['clauses'] = ['10.32']
    elif c['slug'] == 'business-impact-analysis':
        c['clauses'] = ['10.29']
    elif c['slug'] == 'crisis-communication':
        c['clauses'] = ['10.35']

with open('RMIT/controls/library.json', 'w') as f:
    json.dump(library, f, indent=2)

print("Batch 1 of control re-alignment completed.")
