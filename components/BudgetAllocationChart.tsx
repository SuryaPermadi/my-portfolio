"use client";

import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { motion } from "framer-motion";

export default function BudgetAllocationChart() {
    const [income, setIncome] = useState<number>(5000000); // Default 5 Juta

    // 50/30/20 Rule
    const data = [
        { name: "Kebutuhan (50%)", value: income * 0.5, color: "#6D28D9" }, // Violet
        { name: "Keinginan (30%)", value: income * 0.3, color: "#8B5CF6" }, // Light Violet
        { name: "Tabungan (20%)", value: income * 0.2, color: "#DDD6FE" }, // Faded Violet
    ];

    return (
        <div className="w-full max-w-5xl mx-auto p-12 backdrop-blur-2xl border border-secondary rounded-5xl shadow-2xl shadow-primary/5 bg-white/50 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="text-center mb-16">
                <p className="text-[10px] font-black tracking-[0.5em] text-primary mb-3 uppercase">Visualisasi Data</p>
                <h2 className="text-4xl font-black text-foreground uppercase tracking-tight italic">
                    Alokasi <span className="text-primary">Sumber Daya</span>
                </h2>
            </div>

            <div className="flex flex-col xl:flex-row items-center justify-around gap-16">
                {/* Input Section */}
                <div className="w-full xl:w-1/3 space-y-8">
                    <div>
                        <label className="block text-zinc-400 mb-3 font-bold text-[10px] uppercase tracking-[0.2em]">Input Bulanan</label>
                        <div className="relative group/input">
                            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-primary font-black">IDR</span>
                            <input
                                type="number"
                                value={income}
                                onChange={(e) => setIncome(Number(e.target.value))}
                                className="w-full bg-white border border-secondary rounded-2xl py-5 pl-16 pr-6 text-foreground font-black focus:outline-none focus:ring-4 focus:ring-primary/5 transition-all shadow-sm"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        {data.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center justify-between p-6 rounded-2xl bg-white border border-secondary transition-all hover:border-primary/20 hover:shadow-lg"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }}></span>
                                    <span className="text-zinc-500 text-xs font-bold uppercase tracking-wider">{item.name}</span>
                                </div>
                                <span className="font-black text-foreground">
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
                                paddingAngle={8}
                                dataKey="value"
                                stroke="none"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} className="hover:opacity-80 transition-opacity cursor-pointer outline-none" />
                                ))}
                            </Pie>
                            <Tooltip
                                formatter={(value: any) => `${Number(value).toLocaleString("id-ID")}`}
                                contentStyle={{ backgroundColor: "#ffffff", border: "none", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", fontWeight: "bold" }}
                                itemStyle={{ color: "#111111" }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">Total</p>
                        <p className="text-xl font-black text-foreground">100%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
