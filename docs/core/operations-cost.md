---
sidebar_position: 7
title: Operations & Cost Optimization Cases
---

# Operations & Cost Optimization Cases

Operations cases are about how the business *runs*: production, supply chain, process flow, capacity, and cost. Common at every firm, concentrated at McKinsey's Operations practice, and frequent at Bain/BCG as margin or efficiency problems. Most candidates fail by forcing a generic framework; the winning pattern is first principles: **map the flow, find the bottleneck, relieve it, re-check**.

Source: [Road to Offer – Operations case](https://www.roadtooffer.com/blog/operations-case-interview), [HackingTheCaseInterview – Supply chain guide](https://www.hackingthecaseinterview.com/pages/supply-chain-case-interview), [Road to Offer – Operations & cost framework](https://www.roadtooffer.com/blog/operations-cost-framework)

## The four canonical sub-types

1. **Production optimization** — capacity, throughput, yield; find the bottleneck.
2. **Process improvement** — cycle time, rework, defects; lean lens.
3. **Cost reduction** — cost baseline, buckets, levers; the most strategy-adjacent subtype.
4. **Capacity / forecasting** — demand variability, staffing, inventory policy.

## The core framework: the chain map

| Stage | What to investigate |
| --- | --- |
| **Sourcing** | Supplier concentration, buying power, single-source risk, consolidation opportunities |
| **Production** | Capacity utilization, bottlenecks, yield/defects, make-vs-buy |
| **Inventory** | Levels, safety stock, reorder points, turnover by SKU |
| **Distribution** | Warehouse network, transport modes, unit cost to serve |
| **Demand** | Forecast accuracy, variability, seasonality |

For pure *cost* cases, restructure around the cost baseline instead: **A. Build the cost baseline** (split fixed vs variable, by category) → **B. Diagnose which buckets moved** vs budget/benchmark → **C. Identify levers** (procurement, process, overhead, footprint) → **D. Prioritize by size × difficulty** → **E. Recommend** with quantified total savings and implementation risk.

## Bottleneck logic (the quant heart of ops cases)

1. **Define the system** — the sequence of stages from input to output.
2. **Get the rate of each stage** (units/time, from exhibits).
3. **The slowest stage caps total throughput** — that's the bottleneck.
4. **Quantify the constraint** — what does it cost (per hour of lost throughput, in dollars)?
5. **Relieve it** via People / Process / Technology levers (add capacity, rebalance, eliminate wait/rework, automate).
6. **Re-check** — the bottleneck moves; the next constraint is now the question.

**Formulas to know cold:** utilization = actual/output capacity; cycle time per unit; throughput rate; cost per unit = total cost ÷ output; capacity = units/time per station; overall equipment effectiveness intuition (availability × performance × quality). Never average stage rates to compute throughput — take the minimum (averaging is a classic arithmetic trap).

**Lean / Six Sigma vocabulary** (use it to sound like you know the discipline): the seven wastes (overproduction, waiting, transport, defects, over-processing, inventory, motion), DMAIC (Define-Measure-Analyze-Improve-Control), continuous improvement loops.

## Step-by-step approach

1. **Scope the problem** — what's the objective: cost down a %, throughput up, lead time down, quality up? By when?
2. **Map the flow or the cost baseline** — the flow chart or cost breakdown is your structure.
3. **Hypothesize** — which stage/bucket looks broken ("My hypothesis is a production bottleneck given rising order backlog and flat capacity").
4. **Quantify** — utilization, throughput, cycle time, cost per unit; find the constraint or cost driver with numbers.
5. **Generate levers** — procurement (volume consolidation, supplier rationalization, competitive bidding, spec redesign, make-vs-buy), process (lean, standardization, automation), network (facility consolidation — typically saves 15–25% of warehouse fixed cost but adds 1–3 days lead time), overhead (delayering, shared services).
6. **Trade-off explicitly** — cost vs service level, speed vs flexibility, implementation risk vs savings. Name the trade-offs, don't hide them.
7. **Recommend** — the one or two levers with the biggest quantified impact, phased; "we could do A, B, or C" is not a recommendation.

## Key factors and considerations

- **The trade-off is the insight** — cost reduction that degrades service/quality is a trap; always quantify both sides (e.g., inventory vs stockout rate).
- **Capacity vs demand balance** — underutilization = fixed costs spread thin; overutilization = overtime, quality risk, and lost sales.
- **Fixed vs variable behavior** — cost cutting on variable costs scales with volume; fixed-cost removal needs structural change.
- **Benchmarks** — internal comparison across plants/stores is the cheapest diagnostic gold.
- **Implementability** — lumpy levers (plant closure) vs fast levers (renegotiation): sequence for quick wins plus structural change.

## Common pitfalls

1. **Forcing a generic strategy framework** instead of mapping the actual flow or cost structure.
2. **Jumping to solutions before locating the bottleneck/root cause** — the deliberate-discipline case type.
3. **Failing to quantify the constraint** — even qualitative cases deserve a rough dollar figure for what the bottleneck costs.
4. **Averaging stage rates**, mixing units, or ignoring yield losses in math.
5. **Optimizing locally** — a faster stage that floods the queue behind the bottleneck changes nothing.
6. **Ignoring the service-level trade-off** — proposing inventory cuts without stockout consequences.

## Worked example (condensed)

**Prompt:** A manufacturer processes parts through 4 stations: cutting (40/hr), milling (25/hr), assembly (30/hr), packing (45/hr). Orders backlog grows. What do you do?

**Bottleneck analysis:** throughput = min = 25/hr (milling). Utilization: milling at 100%, others ≤ 62%. Lost throughput vs assembly's 30/hr = 5 units/hr. At $100 contribution per unit, one 8-hour shift loses $4,000/day; a full year ≈ $1M+.

**Levers:** (1) rebalance by cross-training or repositioning (low cost), (2) duplicate the miller — $200K capex pays back in ~5 months, (3) reduce milling rework (defect reduction), (4) outsource overflow milling at a premium in the interim.

**Recommendation:** "Relieve the bottleneck in sequence: immediate overflow outsourcing to protect revenue while we install a second miller; the $200K capex pays back in roughly five months at current contribution. Once milling is fixed, the bottleneck moves to assembly (30/hr) — that becomes next quarter's focus."

## Practice prompts

- Your client's order-to-delivery time doubled. Diagnose.
- A retailer suffers stockouts on 10% of SKUs and excess inventory on 30%. Fix.
- A manufacturer's defect rate is 8%. Customers are complaining. What do you do?
- A logistics firm wants to cut distribution cost 20% without hurting delivery times. How?
- An airline's turnaround time between flights has risen to 70 min vs 45 targets. Diagnose.

## Sources

- [Road to Offer – Operations Case Interview](https://www.roadtooffer.com/blog/operations-case-interview)
- [HackingTheCaseInterview – Supply Chain Case Interview](https://www.hackingthecaseinterview.com/pages/supply-chain-case-interview)
- [Road to Offer – Operations & Cost Framework](https://www.roadtooffer.com/blog/operations-cost-framework)
- [StrategyCase – Operations Case Interview](https://strategycase.com/operations-case-interview/)
