"use client";

import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { motion } from "framer-motion";

export default function BudgetAllocationChart() {
    const [income, setIncome] = useState<number>(5000000); // Default 5 Juta

    // 50/30/20 Rule
    const data = [
        { name: "Kebutuhan (50%)", value: income * 0.5, color: "#6366f1" }, // Indigo-500
        { name: "Keinginan (30%)", value: income * 0.3, color: "#ec4899" }, // Pink-500
        { name: "Tabungan (20%)", value: income * 0.2, color: "#a855f7" }, // Purple-500
    ];

    return (
        <div className="w-full max-w-4xl mx-auto p-6 bg-white/5 border border-white/10 rounded-2xl shadow-xl backdrop-blur-sm mt-12">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Simulasi Budget Allocator 50/30/20
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-around gap-10">
                {/* Input Section */}
                <div className="w-full md:w-1/3 space-y-6">
                    <div>
                        <label className="block text-gray-300 mb-2 font-medium">Input Pemasukan Bulanan</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">Rp</span>
                            <input
                                type="number"
                                value={income}
                                onChange={(e) => setIncome(Number(e.target.value))}
                                className="w-full bg-gray-900 border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
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
                                className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50 border border-gray-700/50"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                                    <span className="text-gray-300 text-sm">{item.name}</span>
                                </div>
                                <span className="font-semibold text-white">
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
                                contentStyle={{ backgroundColor: "#1f2937", borderColor: "#374151", borderRadius: "8px", color: "#fff" }}
                                itemStyle={{ color: "#fff" }}
                            />
                            <Legend verticalAlign="bottom" height={36} iconType="circle" />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
