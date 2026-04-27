"use client";

import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { motion } from "framer-motion";

export default function BudgetAllocationChart() {
    const [income, setIncome] = useState<number>(5000000); // Default 5 Juta

    // 50/30/20 Rule
    const data = [
        { name: "Kebutuhan (50%)", value: income * 0.5, color: "#18181b" }, // Zinc-900
        { name: "Keinginan (30%)", value: income * 0.3, color: "#2563eb" }, // Blue-600
        { name: "Tabungan (20%)", value: income * 0.2, color: "#71717a" }, // Zinc-500
    ];

    return (
        <div className="w-full max-w-4xl mx-auto p-8 bg-white border border-zinc-200 rounded-3xl shadow-xl shadow-zinc-100 mt-12">
            <h2 className="text-3xl font-black text-center mb-10 text-zinc-950">
                Simulasi Budget Allocator 50/30/20
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-around gap-10">
                {/* Input Section */}
                <div className="w-full md:w-1/3 space-y-6">
                    <div>
                        <label className="block text-zinc-500 mb-2 font-bold text-xs uppercase tracking-widest">Input Pemasukan Bulanan</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 font-bold">Rp</span>
                            <input
                                type="number"
                                value={income}
                                onChange={(e) => setIncome(Number(e.target.value))}
                                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 pl-12 pr-4 text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-950/10 transition"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        {data.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center justify-between p-4 rounded-xl bg-zinc-50 border border-zinc-100"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                                    <span className="text-zinc-600 text-sm font-medium">{item.name}</span>
                                </div>
                                <span className="font-bold text-zinc-950">
                                    Rp {item.value.toLocaleString("id-ID")}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Chart Section */}
                <div className="w-full md:w-1/2 h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={100}
                                paddingAngle={5}
                                dataKey="value"
                                stroke="none"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip
                                formatter={(value: any) => `Rp ${Number(value).toLocaleString("id-ID")}`}
                                contentStyle={{ backgroundColor: "#ffffff", borderColor: "#e4e4e7", borderRadius: "12px", color: "#09090b" }}
                                itemStyle={{ color: "#09090b" }}
                            />
                            <Legend verticalAlign="bottom" height={36} iconType="circle" />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
