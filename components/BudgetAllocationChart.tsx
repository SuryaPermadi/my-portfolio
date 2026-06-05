"use client";

import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { motion } from "framer-motion";

export default function BudgetAllocationChart() {
    const [income, setIncome] = useState<number>(5000000); // Default 5 Juta

    // 50/30/20 Rule with Cyber Colors
    const data = [
        { name: "Kebutuhan (50%)", value: income * 0.5, color: "#00f5ff" }, // Cyan
        { name: "Keinginan (30%)", value: income * 0.3, color: "#00d8e6" }, // Mid Cyan
        { name: "Tabungan (20%)", value: income * 0.2, color: "#00b4c0" }, // Dark Cyan
    ];

    return (
        <div className="w-full max-w-5xl mx-auto p-12 bg-secondary/20 border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="text-center mb-16">
                <p className="font-mono text-[9px] tracking-[0.5em] text-primary mb-3 uppercase">// RESOURCE_ALLOCATION_MODEL</p>
                <h2 className="text-3xl font-bold text-white uppercase tracking-tighter italic">
                    Alokasi <span className="text-primary font-black">Sistemik</span>
                </h2>
            </div>

            <div className="flex flex-col xl:flex-row items-center justify-around gap-16">
                {/* Input Section */}
                <div className="w-full xl:w-1/3 space-y-8">
                    <div>
                        <label className="block text-gray-500 mb-3 font-mono text-[9px] uppercase tracking-[0.2em]">INIT_DATA_STREAM</label>
                        <div className="relative group/input">
                            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-primary font-mono text-[10px]">IDR</span>
                            <input
                                type="number"
                                value={income}
                                onChange={(e) => setIncome(Number(e.target.value))}
                                className="w-full bg-secondary border border-white/5 py-4 pl-16 pr-6 text-white font-mono text-xs focus:outline-none focus:border-primary/50 transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        {data.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center justify-between p-5 bg-secondary/30 border border-white/5 transition-all hover:border-primary/20"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }}></span>
                                    <span className="text-gray-500 text-[10px] font-mono uppercase tracking-widest">{item.name}</span>
                                </div>
                                <span className="font-bold text-white text-xs">
                                    {item.value.toLocaleString("id-ID")}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Chart Section */}
                <div className="w-full xl:w-1/2 h-[400px] relative">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={80}
                                outerRadius={140}
                                paddingAngle={10}
                                dataKey="value"
                                stroke="none"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} className="hover:opacity-80 transition-opacity cursor-pointer outline-none" />
                                ))}
                            </Pie>
                            <Tooltip
                                formatter={(value: any) => `${Number(value).toLocaleString("id-ID")}`}
                                contentStyle={{ backgroundColor: "#111111", border: "1px solid rgba(0, 245, 255, 0.2)", borderRadius: "0px", fontWeight: "bold" }}
                                itemStyle={{ color: "#00f5ff", fontFamily: "monospace", fontSize: "10px" }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                        <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-1">DATA_OUT</p>
                        <p className="text-xl font-bold text-white">100%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
